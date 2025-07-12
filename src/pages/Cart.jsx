import "./Cart.css"

function Cart(){
    return (
        <div className="cart page">
            <h1>Are you ready to complete your order?</h1>

            <div className="parent">

                <div className="prods">
                    <h3>Your Products</h3>
                </div>

                <div className="side">
                    <h3>Total</h3>

                    <h4>$999.98</h4>

                    <button className="btn btn-primary">Pay Now</button>
                </div>

            </div>    
        </div>
    )
}

export default Cart;