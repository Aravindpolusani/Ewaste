import React, { useState } from "react";
import home from './Images/home.jpg';
import Companylogin from "./Companylogin";
import Dealerlogin from "./Dealerlogin";
import Button from 'react-bootstrap/Button';
import './Homepage.css';

function Logpage(){
    const [colo,setcolo] = useState(false);
    const [delo,setdelo] = useState(false);

    if (colo){
        return <Companylogin />
    }

    if (delo){
        return <Dealerlogin />
    }

    return(
        <div className="loop">
            <img src={home} alt="Home" className="img5" />
            <div className="buttonloop">
                <Button variant="light" onClick={()=>setcolo(true)}>Company Login</Button>&nbsp;&nbsp;
                <Button variant="success" onClick={()=>setdelo(true)}>Dealer Login</Button>
            </div>
        </div>
    )
}

export default Logpage;
