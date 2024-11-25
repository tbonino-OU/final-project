import React from 'react'
// import axios from 'axios'
// uncomment above to use without react redux. Below, react redux functionality imports
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../store/authSlice'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const NewUser = () => {
    //values for new user form submission
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [profile, setProfile] = useState('')
  // uncomment below to use without react redux
  //const [user, setUser] = useState(null)
  const user = useSelector((state) => state.auth) // call authSlice from store
  const error = useSelector((state) => state.auth.error)
  const dispatch = useDispatch() // dispatches actions

  //function for submitting new user data
  const submitHandlerNewUser = e =>{
    e.preventDefault()
    dispatch(signup({username, password, profile}))
    .then((res) => {
      setUsername('')
      setPassword('')
      setProfile('')
    })

    // uncomment to use without react redux
    /* axios.post('http://localhost:8080/signup', {username: username, password: password}).then((res) => {
      console.log(res)
      setUsername('')
      setPassword('')
      setUser(res.data.username)
    }) */
    }

    //user signup form
  return (
    <div className='signup'>
        <form onSubmit={submitHandlerNewUser}>
            <h3> New User Signup </h3>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <label htmlFor='profile'>Profile/Bio</label>
            <input id='profile' type='text' value={profile} onChange={(e) => setProfile(e.target.value)}></input>
            {/* add a submit button */}
            <div class='new-user-button'>
                <button type='submit'>Submit</button>
                {/* <button type='button'>Cancel</button> */}
            </div>
            {/*display any errors*/}
            {error ? <p className="error-message">{error}</p> : null}

            {/*upon successful signup, navigate back to home page. add state={user} after replace to use without redux*/}
            {user ? <Navigate to='/user' replace={true} /> : null}
        </form>
    </div>
  )
}

export default NewUser;

// export default function NewUser(){
//    //values for new user form submission
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   //function for submitting new user data
//   const submitHandlerNewUser = e =>{
//     e.preventDefault()
//     axios.post('http://localhost:8080/signup', {username: username, password: password}).then((data) => {
//       console.log(data)
//       setUsername('')
//       setPassword('')
//     })
//     }

//     //user signup form
//   return (
//     <div className='signup'>
//         <form onSubmit={submitHandlerNewUser}>
//             <h3> New User Signup </h3>
//             <label htmlFor='username'>Username</label>
//             <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
//             <label htmlFor='password'>Password</label>
//             <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
//             {/* add a submit button */}
//             <div class='new-user-button'>
//                 <button type='submit'>Submit</button>
//                 {/* <button type='button'>Cancel</button> */}
//             </div>

//         </form>
//     </div>
//   )
//}