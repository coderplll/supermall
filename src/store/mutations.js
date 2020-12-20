import {ADD_COUNTER, ADD_TO_CART} from './mutation-types'
export default {
  //mutations里的方法完成的事件尽量简单,方便跟踪
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
