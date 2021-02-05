import React from 'react'
import {useHistory} from 'react-router-dom'
import './home.module.css';

export function Home(){

    const history = useHistory();
    const goToLogin = () =>{
        console.log('GO TO LOGIN');
        history.push("/login");
    }
    const goToRegister = () =>{
        console.log('GO TO Register');
        history.push("/register");
    }

    return (
    <>
    <h1>Lucrarea mea de licenta.</h1>
    <p>Bine ai venit la prima pagina a lucrarii mele de licenta.</p>
    <p>Acest proiect va fi folosit ca baza pentru realizarea lucrarii mele de licenta in informatica</p>
    <div class="buttons">
        <button className="btn btn-success mr-1 " onClick = {goToLogin}>Login</button>
        
        <button className="btn btn-success ml-1" onClick = {goToRegister}>Register</button>
    </div>
    </>);
}   