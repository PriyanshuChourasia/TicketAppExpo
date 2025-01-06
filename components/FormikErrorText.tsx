import { AppColors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text } from "react-native";


interface ErrorInterface{
    msg:string;
}


const FomrikErrorText: React.FC<ErrorInterface> = ({msg}) =>{
    return(
        <Text style={ErrorStyles.textStyle}>
            {msg}
        </Text>
    )
}


export default FomrikErrorText;




const ErrorStyles = StyleSheet.create({
    textStyle:{
        color: AppColors.red.red600,
        fontSize: 14,
        fontWeight:'600'
    }
})