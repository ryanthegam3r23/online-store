import "./Payment.css"

function Payment(){
    return(
<div className="wrapper">
    <form className="checkout-form">
      <h2>Checkout Form</h2>
      <div className="flex-row">
        <div className="column">
          <h3>Billing Address</h3>
          <div className="input-box"><span>Full Name</span><input type="text" placeholder="Jane Doe" /></div>
          <div className="input-box"><span>Email</span><input type="email" placeholder="jane@example.com" /></div>
          <div className="input-box"><span>Address</span><input type="text" placeholder="123 Street, City"/></div>
          <div className="flex-row">
            <div className="input-box"><span>City</span><input type="text" placeholder="City"/></div>
            <div className="input-box"><span>ZIP</span><input type="text" maxLength={5} placeholder="12345"/></div>
          </div>
        </div>
        <div className="column">
          <h3>Payment</h3>
          <div className="input-box"><span>Name on Card</span><input type="text" placeholder="Jane Doe"/></div>
          <div className="input-box"><span>Card Number</span><input type="text" maxLength={16} placeholder="1111 2222 3333 4444"/></div>
          <div className="flex-row">
            <div className="input-box"><span>Exp Month</span><input type="text" maxLength={2} placeholder="MM"/></div>
            <div className="input-box"><span>Exp Year</span><input type="text" maxLength={4} placeholder="YYYY"/></div>
            <div className="input-box"><span>CVV</span><input type="text" maxLength={3} placeholder="123"/></div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Pay Now</button>
    </form>
  </div>
    )
}

export default Payment