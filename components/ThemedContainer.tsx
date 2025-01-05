import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { useContext } from "react";
import { StyleSheet, View, ViewProps } from "react-native";



export function ThemedContainer({style, ...otherProps}:ViewProps){
    
    const {colorTheme} = useContext(ThemeContext);

    return <View style={[colorTheme === 'light' ? themeStyles.lightBack : themeStyles.darkBack, style]} {...otherProps} />
}



const themeStyles = StyleSheet.create({
    lightBack:{
        backgroundColor: Colors.light.background,
    },
    darkBack:{
        backgroundColor: Colors.dark.background,
    }
});