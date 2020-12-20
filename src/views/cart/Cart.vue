<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <scroll class="content"
            ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>



  </div>

</template>

<script>
import CartList from "@/views/cart/childComps/CartList";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    CartList,
    CartBottomBar,
    NavBar,
    Scroll
  },
  computed: {
    //1
    // cartLength() {
    //   return this.$store.state.cartList.length
    // }
    //2 mapGetters,将getters映射到计算属性
    // ...mapGetters(['cartLength'])
    //3 对象,可以取别名
    ...mapGetters({
      length: 'cartLength'
    })
  },
  //scroll不知道用户往购物车里添加了内容,所以要手动刷新,计算可滚动高度
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .content {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>
