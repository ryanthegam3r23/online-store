import "./About.css";
import { useState } from "react";

function About(){

    // Here we are going to apply all of the logic
    const [visibleEmail, setVisibleEmail] = useState(false)

    function showEmail(){
        setVisibleEmail(true);
    }

    return(
        <div className="about page">
            <h3>About Us</h3>
            <div className="box">
                <h2>Ryan Popock</h2>
                { visibleEmail ? <h5>rypop04@gmail.com</h5> : <label>Click the button to see my email</label> }
                <br/>
                {
                    !visibleEmail
                        ? <button onClick={showEmail} className="btn btn-outline-primary">Show Email</button>
                        : null
                }
            </div>
        </div>
    )
}

export default About