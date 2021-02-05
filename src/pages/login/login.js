import React, {useState, useEffect} from 'react';
import {Home} from "./../index";
import {doLogin, reqLoginError, reqLoggedIn} from  "./../../slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";


export function Login(){
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isNotVlaid, setIsNotValid] = useState(false);
    const [serverError, setServerError] = useState(false);
    const dispatch = useDispatch();
    const serverErrorSelector = useSelector(reqLoginError);
    const serverIsLoggedIn = useSelector(reqLoggedIn)
    let history = useHistory();


    const login=()=>{
        const data = {
            email,
            password
        }
        dispatch(doLogin(data));
    }

    useEffect(()=>{
        setServerError(serverErrorSelector);
        setIsNotValid(!(email && password));
        if(serverIsLoggedIn){
            console.log("redirect...");
            history.push("/comingsoon");

        }
    },[email, password, serverErrorSelector, serverIsLoggedIn
    ])

    return (
    <>
    <h1>Login</h1>
    {isNotVlaid && (<div className = "alert alert-danger">Email and password are required</div>)}
    {serverError && (<div className = "alert alert-danger">
            Server Error: email or password is invalid
        </div>)}
        <div className = "form-group">

            <input type="text" 
            className = "form-control" 
            placeholder="Email ..."
            onChange={(event) => setEmail(event.target.value)}
            value ={email}/>
        </div>
       
        <div className = "form-group">

            <input type="password" 
            className = "form-control" 
            placeholder="Password ..."
            onChange={(event) => setPassword(event.target.value)}
            value ={password}/>
        </div>
        <button className="btn btn-success" disabled={isNotVlaid}onClick={login}>Login</button>
    </>);
}