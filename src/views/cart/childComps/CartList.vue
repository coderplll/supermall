<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in cartList"
                    :item="item"
                    :key="index"/>
  </div>
</template>

<script>
import CartListItem from "@/views/cart/childComps/CartListItem";
import { mapGetters } from 'vuex'

export default {
  name: "CartList",
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },

}
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px);;
}
</style>
