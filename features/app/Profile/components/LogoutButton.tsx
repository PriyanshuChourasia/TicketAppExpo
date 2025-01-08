import ThemedText from "@/components/ThemedText";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { clearStorage } from "@/services/AuthServices";







const LogoutButton = () =>{

    const [isLoading,setIsLoading] = useState<boolean>(false);

    const router = useRouter();

    const handleLogout = () => {
        setIsLoading(true);
        clearStorage();
        setTimeout(() => {
            router.replace('/(public)/login');
            setIsLoading(false);
        }, 900);

    }


    return(
        <>
        <Button 
            onPress={handleLogout}
            loading={isLoading}
            style={ButtonStyle.container} 
            rippleColor={'white'} 
            buttonColor="white" 
            icon={()=><AntDesign name="logout" size={22} color="red" />} 
            
            mode="elevated">
            <ThemedText style={ButtonStyle.textStyle} size="lg" fontWt="medium">
                Logout
            </ThemedText>
        </Button>
        </>
    )
}


export default LogoutButton;



const ButtonStyle = StyleSheet.create({
    container:{
        paddingVertical:8,
        paddingHorizontal:8,
        borderColor:'red',
        borderWidth:1
    },
    textStyle:{
        color:'red'
    }
})