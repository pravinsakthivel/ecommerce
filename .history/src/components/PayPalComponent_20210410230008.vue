<template>
  <div id="paypal-button"></div>
</template>
<script>
import { computed } from 'vue';
export default {
  mounted() {
    let paypalScript = document.createElement("script");
    paypalScript.setAttribute(
      "src",
      "https://www.paypal.com/sdk/js?client-id=AVqt9vrCUVqfc7P88IdNEju9AuBGJq-97Q6YjIoat7qiJp9kvvh4UoYTX6ck6Du60ubYApPewCvAZViN"
    );
    paypalScript.addEventListener("load", this.loadPayPal);
    document.head.appendChild(paypalScript);
  },
  methods:{
      loadPayPal() {
      let self = this;

      window.paypal
        .Buttons({
          createOrder: function(data, actions) {
           let totalCartValue = self.cartValue;
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalCartValue,
                  },
                },
              ],
            });
          },
          onApprove: function(data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function(details) {
              // This function shows a transaction success message to your buyer.
              self.processPostPayment(details);
            });
          },
        })
        .render("#paypal-button");
    },
     processPostPayment(details) {
      console.log(details);
      this.$store.dispatch("products/setCartItems", []);
      this.$store.dispatch("products/resetProductIdsInCart");
      this.$router.push("orderSuccessPage");
    }
  },
  computed:{
    cartValue(){
      return this.$store.getters['products/getCartValue'];
    }
  }
}
</script>

