import axios from "axios";
import { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import './SuccessOtp.css';
import Logpage from "./Homepage";

function SuccessOtp() {
    const [updatedata,setupdatedata]=useState(false);
    const [otpdata, setOtpData] = useState({
        client:'',
        password: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000//succesotp/');
                setOtpData(response.data);
            } catch (error) {
                alert("No data found");
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async () => {
        try {
            await axios.put('http://localhost:8000//succesotp/', otpdata);
            alert('Data updated successfully');
            setupdatedata(true);
        } catch (error) {
            console.log(otpdata);
            alert('Failed to update data');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOtpData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    if(updatedata){return <Logpage />;}
    return (
        <div className="success">
                <label><b>Company Name </b></label>
                <input type="text" name="client" value={otpdata.client}/><br /><br />
                <label><b>Update your Password</b></label>
                <input type="text" name="password" value={otpdata.password} onChange={handleChange} placeholder="Last name" /><br /><br />                
                <center>
                <Button variant="primary" onClick={handleSubmit}>Submit</Button>{' '}</center>
        </div>
    );
};

export default SuccessOtp;