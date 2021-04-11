# ecommerce-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Functionalities

```
**Login** - Captures User Name and Displays info.
**Product Catalog** - Display's the data stored in firebase.
**Search Bar** - Filter products based on Name.
**Add to cart** - On click of add to cart item's will be added to cart.
**Details** - Popup will be shown with addtional details.
**MyCart** - Items added to the cart will be displayed in this section.
**Remove Item** - Removes Item from cart , with a confirmation dialog.
**Empty Cart** - If cart is empty , Explore Items Button will be displayed , whicg takes user to product catalo.
**Checkout** - Navigates ro the checkout page , where Billing address and Payment Summary.
**Proceed to Payment** - Once Billing address is entered enables Paypal Payment Gateway for Authorizaion(Sandbox login details are give below).
**Payment Success** - On Successful Payment , Success Page will be shown.
**Logout** - Option available under user details , will reset data and redirect to Login Page.

```

### Caching

```
If Product catalog Page is accessed less than a minute after previous load , data will be returned from cache/existing state.
If product logo on top right corner is clicked , page will be force refreshed and data will be fetched from database.

```

### Paypal sandbox account details

```
UserName : sb-rcxi45851703@personal.example.com
password : crQ@m4NK
```
