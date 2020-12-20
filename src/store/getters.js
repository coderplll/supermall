export default {
  cartLength(state) {
    // return state.cartList.length
    return state.cartList.reduce(
      (pre, curr) => pre + curr.count, 0
    );
  },
  cartList(state) {
    return state.cartList
  }

}
