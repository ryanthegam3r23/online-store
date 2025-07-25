import "./Catalog.css"
import Product from "../components/Product"
import DataService from "../services/DataService";
import { useEffect, useState } from "react";

function Catalog() {

    const [products, setProducts] = useState([]);
    

    useEffect(function(){
        loadCatalog();
    },[]);

   async function loadCatalog() {
        let service = new DataService();
        let prods = await service.getProducts();
        setProducts(prods);
    }

    console.log(products);

    return (
        <div className='main-page'>
            <h3>We have {products.length} new products for you!</h3>
            <br/>
            <div className="catalog-items">
                {
                    products.map((item) => (
                        
                        <Product key={item._id} data={item}></Product>
                    ))
                    
                }
            </div>
        </div>
    );
}

export default Catalog;