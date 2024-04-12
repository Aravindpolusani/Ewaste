import React,{ createContext, useContext,useState } from "react";

const AuthContext = createContext();

const AuthProvider=({children})=>{
    const [companylogin,setcompanylogin]=useState(false);
    const [dealerlogin,setdealerlogin]=useState(false);
    const [userdata,setuserdata]=useState([]);

    return(
        <AuthContext.Provider value={{ companylogin,setcompanylogin,dealerlogin,setdealerlogin,userdata,setuserdata }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthProvider,AuthContext};