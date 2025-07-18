import "./Payment.css"

function Payment(){
    return(
<div class="wrapper">
    <form class="checkout-form">
      <h2>Checkout Form</h2>
      <div class="flex-row">
        <div class="column">
          <h3>Billing Address</h3>
          <div class="input-box"><span>Full Name</span><input type="text" placeholder="Jane Doe" /></div>
          <div class="input-box"><span>Email</span><input type="email" placeholder="jane@example.com" /></div>
          <div class="input-box"><span>Address</span><input type="text" placeholder="123 Street, City"/></div>
          <div class="flex-row">
            <div class="input-box"><span>City</span><input type="text" placeholder="City"/></div>
            <div class="input-box"><span>ZIP</span><input type="text" placeholder="12345"/></div>
          </div>
        </div>
        <div class="column">
          <h3>Payment</h3>
          <div class="input-box"><span>Name on Card</span><input type="text" placeholder="Jane Doe"/></div>
          <div class="input-box"><span>Card Number</span><input type="text" placeholder="1111 2222 3333 4444"/></div>
          <div class="flex-row">
            <div class="input-box"><span>Exp Month</span><input type="text" placeholder="MM"/></div>
            <div class="input-box"><span>Exp Year</span><input type="text" placeholder="YYYY"/></div>
            <div class="input-box"><span>CVV</span><input type="text" placeholder="123"/></div>
          </div>
        </div>
      </div>
      <button type="submit" class="btn">Pay Now</button>
    </form>
  </div>
    )
}

export default Payment