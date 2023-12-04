import React, { useEffect, useState } from "react"; 
import './LoginSignUp.css'
import Navbar from '../../components/navbar/navbar';


const LoginSignUp=()=>{
     const [sarra, setsarra] = useState('sarra')

    useEffect(() => {
        console.log("comp chargee")
    }, [])
    useEffect(() => {
        console.log(sarra)
    }, [sarra])
    
    return(
        <>
        <Navbar  sarra={sarra} setsarra={setsarra} />
        <input type="text" value={sarra} 
          onChange={(e) => setsarra(e.target.value)}
/>
        <h1>{sarra}</h1>
        </>

     
    )
}

export default LoginSignUp