import { useState } from "react";
import DataContext from "./DataContext";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser]= useState({ loggedIn:true, name:"Ryan" });

    function addProductToCart(prod){
        console.log("global add")
    }

    function clearCart() {
        
    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;