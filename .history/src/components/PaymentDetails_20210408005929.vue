<template>
  <div>
    <h3>Payment Summary</h3>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.productId">
          <td>{{ item.productName }}</td>
          <td>{{ item.quantity }}</td>
          <td>$ {{ item.cartValue ? item.cartValue : item.price }}</td>
        </tr>
        <tr>
          <td colspan="2" class="text-right">Total Amount</td>
          <td>
            <strong>$ {{ totalPrice }}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div id="paypal-button"></div>
</template>
<script>
export default {
  props: ["cartItems"],
  computed: {
    totalPrice() {
      let cartvalue = 0;
      this.cartItems.forEach((element) => {
        cartvalue += element.cartValue ? element.cartValue : element.price;
      });
      return cartvalue;
    },
  },
  mounted() {
    this.$loadScript("https://www.paypalobjects.com/api/checkout.js").then(()=>{
        paypal.Button.render({
                env: 'sandbox',
                client: {
                    sandbox: 'EHDbgupw9IpjhqfJAb8VZIktF31dxgSmIRKp-5RBv2CRaLGn-6Aqmc3GRbx7N2hKy9UNdeEQAi4qsOFX	',
                },

                locale: 'en_US',
                style: {
                    size: 'medium',
                    color: 'gold',
                    shape: 'pill',
                },

                commit: true,

                payment: function(data, actions) {
                    return actions.payment.create({
                        transactions: [{
                            amount: {
                                total: '11',
                                currency: 'USD'
                            }
                        }]
                    });
                },

                onAuthorize: function(data, actions) {
                    return actions.payment.execute().then(function() {
                        window.alert('Thank you for your purchase!');
                    });
                }
            }, '#paypal-button');
    });
  },
};
</script>
