import React, { useState } from 'react'
import './Login.css'
import { LinkedIn } from '@mui/icons-material'
import { auth } from './firebase'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, pass)
        .then((userAuth) =>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
            }))
        })

    }
    const register = () =>{
        if(!name){
            return alert("please enter a full name")
        }

        auth.createUserWithEmailAndPassword(email, pass)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
            })
            .then(() =>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                }))
            })
        }).catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <LinkedIn className='linked__icon' />
        <form >
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Full name (required if register)' />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder='PassWord' />
            <button type='submit' onClick={loginToApp} >Sign In</button>
        </form>
        <p>Not a member? <span className='login__register' onClick={register} >Register now</span></p>
    </div>
  )
}

export default Login