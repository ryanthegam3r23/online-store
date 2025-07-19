import { useContext } from "react";
import "./Cart.css"
import DataContext from "../state/DataContext";
import { Link } from "react-router-dom";

function Cart(){

     const cart = useContext(DataContext).cart

     function pay(){
        console.log("Proceed to payment page")
     }

    return (
        <div className="cart page">
            <h1>Are you ready to complete your order?</h1>
            <h5>We have {cart.length} products waiting for you</h5>

            <div className="parent">

                <div className="prods">
                    <h3>Your Products</h3>

                    {cart.map(prod => 
                    <div key={prod._id} className="prod-cart">
                        <img src={"/images/"+prod.image} />
                        <h6>{prod.title}</h6>
                        <label>Price: ${prod.price}</label>
                        <label>Qty:{prod.quantity}</label>
                        <button className="btn btn-sm btn-outline-danger">Remove</button>
                    </div>
                    )}
                </div>

                <div className="side">
                    <h3>Total</h3>

                    <h4>$999.98</h4>

                    <Link onClick={pay} className="btn btn-primary" to="/payment">Pay Now</Link>
                </div>

            </div>    
        </div>
    )
}


export default Cart;