import { Colors } from "@/constants/Colors";
import { fullWidth } from "@/constants/SizeDimension";
import {StyleSheet } from "react-native";




export const ButtonStyle = StyleSheet.create({
    lightcontainer:{
        width: fullWidth/1.25,
        backgroundColor:Colors.dark.background,
        paddingVertical:5
    },
    darkContainer:{
        width: fullWidth/1.25,
        backgroundColor:Colors.light.background,
        paddingVertical:5
    },
    lightTheme:{
        color: Colors.dark.text
    },
    darkTextTheme:{
        color: Colors.light.text
    }
})