import React from "react"
import { Dimensions, Image, StyleSheet } from "react-native";


const Icon = require('../assets/appIcon/welcome.png');



const WelcomeIcon = () =>{


    return(
        <>
            <Image source={Icon} style={iconStyle.lightStyle} />
         
        </>
    )
}



export default WelcomeIcon;


const {height,width} = Dimensions.get('window');

const imageHeight = Math.floor(height * 0.226);
const imageWidth = Math.floor(width * 0.5);
// const circle = Math.floor((imageHeight + imageWidth)/2);

const iconStyle = StyleSheet.create({
    lightStyle:{
        backgroundColor:'transparent',
        height:imageHeight,
        width: imageWidth,
    },

})