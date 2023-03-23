// import { useState } from "react"
import React, { useState } from 'react'
import ReactDOM from 'react-dom'; 

import {Link} from 'react-router-dom'



export default function About() {
    const [text, settext] = useState("Enable dark mode")
    const [mystyle, setstyle] = useState({
        color: "black",
        backgroundColor: "white",
        marginLeft: 225,
        // height: 40,
        width: 711
    });
    const [myst,setmyst]=useState({
        color:"black",
        backgroundColor:"white"
    })

    const handleclick = () => {
        if (mystyle.color == "black") {
            setstyle({
                color: "white",
                backgroundColor: "black",
                marginLeft: 225,
                // height: 400,
                width: 711
            });
            settext("Enable bright mode");
            setmyst({
                color:"white",
                backgroundColor:"black"
            })
        }
        else {
            setstyle({
                color: "black",
                backgroundColor: "white",
                marginLeft: 225,
                // height: 400,
                width: 711
            });
            settext("Enable dark mode");
            setmyst({
                color:"black",
                backgroundColor:"white"
            })
        }

    }

    return (
        <div className='m-50 ' style={mystyle}>
            <h1>About page using accordion </h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myst}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myst}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myst} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: 20 }} >

                <button type="button" className="btn btn-warning" onClick={handleclick}>{text}</button>
            </div>
       
        </div>
    )
}
