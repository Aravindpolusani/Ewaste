import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "./AuthContext";
import "./Logout.css";

function Logout() {
    const { setdealerlogin, setcompanylogin } = useContext(AuthContext);
    const handlelogout = () => {
        setdealerlogin(false);
        setcompanylogin(false);
        window.location.href = './';
    }
    return (
        <div className="logout">
            <Helmet>
                <title>Logout | E-waste Management</title>
            </Helmet>
            <h2>Are you sure want to logout</h2><br />
            <button className="button" onClick={handlelogout}>Logout</button>
        </div>
    );
};

export default Logout;
