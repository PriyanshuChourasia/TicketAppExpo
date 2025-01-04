import React from "react";
import LoginForm from "./Components/LoginForm";
import JumbotronView from "@/components/JumbotronView";
import { LoginStyles } from "./styles/LoginStyles";
import AppLogo from "./Components/AppLogo";



const LoginScreen = () =>{
    

    return(
        <JumbotronView style={LoginStyles.container}>
            <AppLogo/>
            <LoginForm/>
        </JumbotronView>
    )
}


export default LoginScreen;