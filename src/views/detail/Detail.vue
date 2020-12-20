<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    @titleClick="titleClick"
                    ref="detailNavBar"></detail-nav-bar>
    <scroll class="content"
            :probe-type="3"
            @scroll="contentScroll"
            ref="scroll">
<!--      传值不用驼峰,用top-images    监听事件可以用驼峰 -->
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"
                         @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :param-info="paramInfo"
                         ref="param"></detail-param-info>
      <detail-comment :comment="comment"
                      ref="comment"></detail-comment>
      <goods-list :goods="recommends"
                  ref="recommends"/>
    </scroll>

    <!--  .native可以监听组件内根元素的原生事件-->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>


  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailSwiper from "@/views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailComment from "@/views/detail/childComps/DetailComment";
import DetailBottomBar from "@/views/detail/childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "@/network/detail";
import {itemListenerMixin,backTopMixin} from "@/common/mixin"
import {debounce} from "@/common/utils";

import { mapActions } from 'vuex'

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailComment,
    DetailBottomBar,


    Scroll,
    GoodsList
  },
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid

    //2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      if(res.result != undefined){
        //获取总数据
        const data = res.result

        // 获取轮播图
        this.topImages = data.itemInfo.topImages

        //获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        )

        //店铺信息
        this.shop = new Shop(data.shopInfo)

        //商品详细信息
        this.detailInfo = data.detailInfo;

        //参数信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule)

        //获取评论
        if (data.rate.cRate != 0) {
          this.comment = data.rate.list[0];
        }
      }

      //渲染完成之后回调,但图片还没加载完全,所以此方法行不通
      // this.$nextTick(() => {
      //   this.themeTopYs = []
      //   this.themeTopYs.push(0)
      //   this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      //   this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      //   console.log(this.themeTopYs)
      // })
    })

    //3.请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })

    //4.getThemeTopY赋值,防抖计算topY
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
      this.themeTopYs.push(Infinity);
      console.log(this.themeTopYs)
    },500)

  },
  methods: {
    imageLoad(){
      //监听detailGoodsInfo图片加载事件.刷新better-scroll,并做防抖刷新.
      this.newRefresh()

      //监听detailGoodsInfo图片加载事件,计算topY,并防抖.
      this.getThemeTopY()
    },
    //点击不同主题跳转到具体位置
    titleClick(index){
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
    },

    //监听滚动,并更换主题颜色
    contentScroll(position) {
      const positionY = -position.y
      let length = this.themeTopYs.length - 1
      for(let i = 0; i < length; i++){
        if (this.currentIndex != i && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) {
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex
        }
      }

      //是否显示回到顶部
      this.isShowBackTop = (-position.y) > 1000
    },

    //actions映射
    ...mapActions(['addCart']),

    addToCart(){
      //获取购物车展示的信息
      const product = {
        iid: this.iid,
        desc: this.goods.desc,
        price: this.goods.lowNowPrice,
        title: this.goods.title,
        image: this.topImages[0]
      }

      //将商品添加到购物车里
      // this.$store.cartList.push(product)
      // this.$store.dispatch('addCart', product).then(res => {
      //   console.log(res)
      // })
      this.addCart(product).then(() => {
        this.$toast.show("加入购物车成功");
        console.log(this.$toast)
      }).catch(() => {
        this.$toast.show("当前商品数量+1");
      })



    }
  },
  mounted() {

  },
  destroyed() {
    //取消全局事件总线的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)

  }
}
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>
