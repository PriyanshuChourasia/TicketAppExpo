import { Colors } from "@/constants/Colors";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import React, { useContext } from "react";
import { StyleSheet, Text, TextProps } from "react-native";


export type ThemedTextProps = TextProps & {
    size:'sm' | 'md' | 'base' | 'lg' | 'xl' | 'xxl' | 'large';
    fontWt?:'light' | 'normal' | 'medium' | 'semibold' | 'bold',
    colorScheme?:string;
    alignCenter?:boolean

}


export function ThemedText({style,size,alignCenter,colorScheme,fontWt,...rest}:ThemedTextProps){
    const {colorTheme} = useContext(ThemeContext);
    

    return(
        
        <Text
            style={[
                size === 'sm' ? themeStyles.smallText : undefined,
                size === 'md' ? themeStyles.mdText : undefined,
                size === 'base' ? themeStyles.baseText : undefined,
                size === 'lg' ? themeStyles.lgText : undefined,
                size === 'xl' ? themeStyles.xlText : undefined,
                size === 'xxl' ? themeStyles.xxlText : undefined,
                size === 'large' ? themeStyles.largeText : undefined,
                colorTheme === 'light' ? themeStyles.lightText : themeStyles.darkText,
                fontWt === 'light' ? themeStyles.fontLight : undefined,
                fontWt === 'normal' ? themeStyles.fontNormal :  undefined,
                fontWt === 'medium' ? themeStyles.fontMedium :  undefined,
                fontWt === 'semibold' ? themeStyles.fontSemiBold :  undefined,
                fontWt === 'bold' ? themeStyles.fontBold :  undefined,
                alignCenter ? themeStyles.textCenter : undefined,
            style
        ]}
        {...rest}
    />
    ) 
}



export default ThemedText;


// function fontConfig(size:string){
//     if(size === 'sm')
//     {
//         return 12;
//     }
//     else if(size === 'md')
//     {
//         return 15;
//     }
//     else if(size === 'base')
//     {
//         return 18;
//     }
//     else if(size === 'lg')
//     {
//         return 22;
//     }
//     else if(size === 'xl')
//     {
//         return 25;
//     }
//     else{

//     }
// }




const themeStyles = StyleSheet.create({
    lightText:{
        color: Colors.light.text
    },
    darkText:{
        color: Colors.dark.text
    },
    smallText:{
        fontSize:12,
    },
    mdText:{
        fontSize:14,
    },
    baseText:{
        fontSize:16,
    },
    lgText:{
        fontSize:18,
    },
    xlText:{
        fontSize:22,
    },
    xxlText:{
        fontSize:26,
    },
    largeText:{
        fontSize:30
    },
    fontLight:{
        fontWeight:'300'
    },
    fontNormal:{
        fontWeight:'500'
    },
    fontMedium:{
        fontWeight:'700'
    },
    fontSemiBold:{
        fontWeight:'900'
    },
    fontBold:{
        fontWeight:'bold'
    },
    textCenter:{
        textAlign:'center'
    }
})