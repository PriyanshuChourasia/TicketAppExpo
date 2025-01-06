import ContainerView from "@/components/ContainerView";
import RegisterScreen from "@/features/auth/Register/RegisterScreen";
import React from "react";
import { Text } from "react-native";


const Register = () =>{
    return(
        <ContainerView>
            <RegisterScreen/>
        </ContainerView>
    )
}


export default Register;