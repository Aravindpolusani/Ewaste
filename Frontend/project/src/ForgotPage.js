import './ForgotPage.css'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios';
import OtpValidation from './OtpValidation';
import Dealerlogin from './Dealerlogin';


function ForgotPage({value}) {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [gotoRegister,setgotoRegister]=useState(false);
    const senddata = () => {
        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setError('');
        <OtpValidation />
        axios.post('http://localhost:8000/signup/forgot/', { 'email': email,'value':value })
            .then((resp) => {
                alert("OTP is send to your Respect Email");
                setSubmitted(true);
            })
            .catch((error) => {
                alert("Something went wrong please enter valid email\uD83D\uDE15");
            });
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
    if (submitted) { return <OtpValidation />;}
    if(gotoRegister) { return <Dealerlogin/>;}

    return (
        <div id="container-1">
            <center>
            <h3>Find Your Account</h3>
            <hr />
            <form>
                <p>Please enter your email address to search <br />for your account</p>
                <input type="text" placeholder="Email address" onChange={(event) => setEmail(event.target.value)} />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <hr />
                <div id='butt'>
                    <Button variant="secondary" onClick={()=>setgotoRegister(true)}>Cancel</Button>{' '}
                    <Button variant="primary" onClick={senddata}>Send OTP</Button>{' '}
                </div>
            </form>
            </center>
        </div>
    );
};


export default ForgotPage;