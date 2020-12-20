import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'

export default {
  //对象解构
  addCart({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      //查找购物车是否有该商品
      let oldProduct = state.cartList.find(item => item.iid === payload.iid)
      //判断是否已经添加
      if (oldProduct) {
        commit(ADD_COUNTER, oldProduct)
        reject()
      }else {
        payload.count = 1
        commit(ADD_TO_CART, payload)
        resolve()
      }
    })
  }
}
