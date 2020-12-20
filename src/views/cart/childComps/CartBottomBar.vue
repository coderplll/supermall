<template>
  <div id="cart_total">
    <div @click="checkClick" style="display: flex;">
      <check-button :isChecked="checkAll" ref="checkButtonRef" />全选
    </div>
    <div class="calc">总计：￥{{ totalPrice | keep2Decimal }}</div>
    <div class="buy" @click="buySth">去购买({{ totalLength }})</div>
  </div>
</template>
<script>
import CheckButton from "@/components/content/checkButton/CheckButton";

export default {
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    checkedItem() {
      return this.cartList.filter((item, index) => item.checked == true);
    },
    totalLength() {
      return this.checkedItem.reduce(
        (pre, curr) => pre + curr.count, 0
      );
    },
    totalPrice() {
      return this.checkedItem.reduce(
        (pre, curr) => pre + curr.count * curr.price, 0
      );
    },
    checkAll() {
      if (this.cartList.length === 0) {
        return false;
      } else {
        //1.过滤出未选中的,若长度不为0,return false;
        // return !(this.cartList.filter(item => !item.checked).length);
        //2.找到没有选中的,return false;
        // return !this.cartList.find(item => !item.checked);
        //3.所有item都选中,return true
        return this.cartList.every(item => item.checked == true);
      }
    }
  },
  components: {
    CheckButton
  },
  filters: {
    keep2Decimal(value) {
      return Math.round(value * 100) / 100;
    }
  },
  methods: {
    checkClick() {
      /* if (this.checkAll == true) {
        this.cartList.forEach(item => item.checked = false);
      } else {
        this.cartList.forEach(item => item.checked = true);
      } */
      //必须设置一个变量保存,不能直接放到forEach,因为checkAll是动态绑定,会动态更新.
      let checkFlag = !this.checkAll;
      this.cartList.forEach(item => (item.checked = checkFlag));
    },
    buySth() {
      if (this.totalLength == 0) {
        this.$toast.show("请选择要购买的商品");
      } else {
        //====>购买界面，确认信息
      }
    }
  }
};
</script>
<style scoped>
#cart_total {
  font-size: 0.7rem;
  height: 40px;
  display: flex;
  background-color: rgb(228, 228, 228);
  line-height: 40px;
  text-align: center;
}

.calc {
  flex: 1;
}
.buy {
  width: 5rem;
  background-color: #f03;
  color: white;
}
</style>
