import { ThemedContainer } from "@/components/ThemedContainer";
import React from "react"
import { ImageBackground } from "react-native";
import { RegisterStyle } from "./styles/RegisterStyle";


const AppLogo = require('../../../assets/appIcon/welcome.png');



const RegisterScreen = () =>{
    return(
        <>
        <ThemedContainer style={RegisterStyle.container}>
            <ImageBackground source={AppLogo} resizeMode='contain' style={RegisterStyle.image}>

            </ImageBackground>
        </ThemedContainer>
        </>
    )
}




export default RegisterScreen;