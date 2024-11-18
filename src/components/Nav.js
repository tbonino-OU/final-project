import Hamburger from "./Hamburger"
import React, {useState} from "react";

export default function Nav(){
    const[hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        <div>
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>Table of Contents</li>
                    <li>Media Search</li>
                </ul>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger />
                    </div>
            </div>
            <style jsx>{`
                .navigation{
                    width:100%;
                    height:50px;
                    background-color:blue;
                }

                .navigation ul{
                    display:${hamburgerOpen ? 'flex' : 'none'};
                    height: 100vh;
                    width: 50vw;
                    margin-top: 50px;
                    position: absolute;
                }

                .navigation ul li{
                    list-style-type: none;
                    padding-right:10px
                }
            `}</style>
        </div>

        
    )
}