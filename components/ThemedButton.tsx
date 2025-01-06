import ThemedText from "@/components/ThemedText";
import React, { useContext, useState } from "react";
import {Button} from "react-native-paper";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { AppColors, Colors } from "@/constants/Colors";
import { StyleProp, StyleSheet } from "react-native";



interface ThemedButtonInterface{
    name:string;
    onButtonPress?:()=>void;
    isBtnLoading?:boolean;
    marginY?:number;
    icon?:string;
    style?:any
}


const ThemedButton: React.FC<ThemedButtonInterface> = ({name,onButtonPress,isBtnLoading,marginY,icon,style}) =>{

    const [isLoading,setIsLoading] = useState<boolean>(isBtnLoading ? isBtnLoading : false);
    const {colorTheme} = useContext(ThemeContext);

    const handleRoute  = async() =>{
        setIsLoading(true);
        try{
            await new Promise(resolve => setTimeout(resolve,1500));
        }catch(e){
            console.warn(e);
        }finally{
            setIsLoading(false);
            if(onButtonPress)
            {
                onButtonPress();
            }
        }


    }


    return(
        <>
            <Button 
                icon={icon}
                loading={isLoading} 
                rippleColor={AppColors.gray.gray700} 
                onPress={handleRoute} mode="outlined" 
                style={[{marginTop:marginY,marginBottom:marginY},(colorTheme === "light" ? ButtonStyle.lightcontainer : ButtonStyle.darkContainer)]}>
                <ThemedText style={[colorTheme === 'light' ? ButtonStyle.lightTheme : ButtonStyle.darkTextTheme]} size="md" fontWt="semibold">
                    {name}
                </ThemedText>
            </Button>
        </>
    )
}


export default ThemedButton;





const ButtonStyle = StyleSheet.create({
    lightcontainer:{
        width: '100%',
        backgroundColor:Colors.dark.background,
        paddingVertical:5,
        marginVertical:8,
    },
    darkContainer:{
        width: '100%',
        backgroundColor:Colors.light.background,
        paddingVertical:5,
        marginVertical:8
    },
    lightTheme:{
        color: Colors.dark.text
    },
    darkTextTheme:{
        color: Colors.light.text
    }
})