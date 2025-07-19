import { Link } from "react-router-dom";
import "./Home.css"

function Home(){
    return(
        <div className="home page">
            

            <img className="img-1" src="./images/Header.JPG" alt="" />
                <h1>From the fields to your tablee</h1>
            <h5>We sell the freshest food in the state</h5>

            <img className="img-2" src="./images/fresh.jpg" alt="" />
            <div>
                <h1>BROWSE OUR CATALOG</h1>
            </div>
        </div>
    )
}

export default Home;