import {debounce} from "@/common/utils";
import BackTop from "@/components/content/backTop/BackTop";

//变量混入,组件对象中相同的代码可以用混入
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null,
    }
  },
  mounted() {
    // better-scroll滚动卡顿的原因是因为图片还没加载完,就计算了滚动区域,导致滚动区域远远小于加载完后的长度.
    // 没加之前:监听item图片加载完成,每加载一张就刷新一次,让better-scroll重新计算滚动区域,使得滚动更加丝滑
    // 加了防抖后:设置10ms内没有新的图片加载,才刷新.否则重新计时,直到10ms内都没有新的图片加载.
    this.newRefresh = debounce(this.$refs.scroll.refresh, 10)
    this.itemImgListener = () => {
      this.newRefresh()
    }
    this.$bus.$on('itemImageLoad',this.itemImgListener)
    // console.log('我是混入')
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
  }
}
