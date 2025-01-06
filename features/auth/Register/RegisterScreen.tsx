import { ThemedContainer } from "@/components/ThemedContainer";
import React from "react"
import { ImageBackground } from "react-native";
import { RegisterStyle } from "./styles/RegisterStyle";
import RegisterForm from "./components/RegisterForm";


const AppLogo = require('../../../assets/appIcon/welcome.png');



const RegisterScreen = () =>{
    return(
        <>
        <ThemedContainer style={RegisterStyle.container}>
            <ImageBackground source={AppLogo} resizeMode='contain' style={RegisterStyle.image}>
                <ThemedContainer style={RegisterStyle.overlayContainer}>
                    <RegisterForm/>
                </ThemedContainer>
            </ImageBackground>
        </ThemedContainer>
        </>
    )
}




export default RegisterScreen;