import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../store/authSlice';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const UserSignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const user = useSelector((state) => state.auth.user)
    const error = useSelector((state) => state.auth.error)
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        dispatch(signin({username, password}))
        .then(() => {
          setUsername('')
          setPassword('')
        })
    }

  return (
    <div className='user-sign-in'>
      <form onSubmit={submitHandler}>
            <h3> User Sign In </h3>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            {/* add a submit button */}
            <div class='user-sign-in-button'>
                <button type='submit'>Submit</button>
                {/* <button type='button'>Cancel</button> */}
            </div>
            {/*display any errors*/}
            {error ? <p className="error-message">{error}</p> : null}

            {/*upon successful sign in, navigate back to home page. add state={user} after replace to use without redux*/}
            {user ? <Navigate to='/user' replace={true} /> : null}
        </form>
    </div>
  )
}

export default UserSignIn;