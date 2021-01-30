import { Button } from '@material-ui/core';
import React from 'react';
import './App.css'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'


function Login (){
    const [state,dispatch] = useStateValue();
    const singIn =(e) =>{
        //sign in stuff
        auth.signInWithPopup(provider)
            .then((result)=>{
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img className="fb_picc"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
			    alt="" />
                <img className="fb__text"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/294px-Facebook_Logo_%282019%29.svg.png" alt="" />
            </div>
            <Button type="submit" 
            onClick={singIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;