import Hamburger from "./Hamburger"
import React, {useState} from "react"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../store/authSlice"

/* export default function Nav(){
    const[hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
        <div>
            <div className="navigation">
                <ul>
                    <li><Link to= '/'>Home</Link></li>
                    <li><Link to= '/TableofContents'>Table of Contents</Link></li>
                    <li><Link to= '/user'>User Sign In</Link></li>
                    <li><Link to= '/user'>New User Sign Up</Link></li>
                </ul>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
            </div>
            <style jsx>{`
                .navigation{
                    width:100%;
                    height:50px;
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
} */

const Nav = () => {
    const[hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    //use with react redux
    const loggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch()

  return (
    <div>
            <div className="navigation">
                <ul>
                    <li><Link to= '/'>Home</Link></li>
                    <li><Link to= '/TableofContents'>Table of Contents</Link></li>
                    <li><Link to= '/user'>Account</Link></li>
                    {/* option to log out only seen if user logged in. If not logged in, cannot see this link. */}
                    { loggedIn ? <li><Link to= '/' onClick={() => dispatch(logout())}>Log Out</Link></li> : null}
                </ul>
                    <div className="hamburger" onClick={toggleHamburger}>
                        <Hamburger isOpen={hamburgerOpen}/>
                    </div>
            </div>
            <style jsx>{`
                .navigation{
                    width:100%;
                    height:50px;
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

export default Nav;