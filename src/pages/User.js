import React from 'react'
import Header from '../components/Header'
import NewUser from '../components/NewUser'
import UserSignIn from '../components/UserSignIn'
//this import handles displaying the current user's data. uncomment to use without react redux
// import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'

// This page is for displaying an individual user
const User = () => {
    // enable display of user specific data. uncomment to use without react redux
    // const location = useLocation()
    // const user = location.state

    // display use specific data using react redux
    const user = useSelector((state) => state.auth.user)
    const profile = useSelector((state) => state.auth.profile)

  return (
    <div className= 'user-page'>
        <Header />
        {user ? <h1>Hi, {user}!</h1> : <div><h1>Sign In, or Create a New Account.</h1> <UserSignIn /></div>}
        <h2>Profile</h2>
        {user ? <p>{profile}!</p> : <div><p>This is where the user profile goes.</p></div>}

        {user ? null : <div><h3>Need an account? Sign up:</h3><NewUser /></div>}
        <Footer />
    </div>
  )
}

export default User

