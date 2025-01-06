import ThemedText from "@/components/ThemedText";
import React, { useContext, useState } from "react";
import { Button } from "react-native-paper";
import { ButtonStyle } from "../../styles/ButtonStyles";
import { ThemeContext } from "@/context/ThemeContext/ThemeContext";
import { AppColors } from "@/constants/Colors";
import { useRouter } from "expo-router";



interface AppButtonInterface{
    name:string
}


const AppButton: React.FC<AppButtonInterface> = ({name}) =>{

    const [isLoading,setIsLoading] = useState<boolean>(false);
    const {colorTheme} = useContext(ThemeContext);
    const router = useRouter();

    const handleRoute  = async() =>{
        setIsLoading(true);
        try{
            await new Promise(resolve => setTimeout(resolve,1400));
        }catch(e){
            console.warn(e);
        }finally{
            router.push('/(public)/login');
            setIsLoading(false);
        }


    }


    return(
        <>
            <Button loading={isLoading} rippleColor={AppColors.gray.gray700} onPress={handleRoute} mode="outlined" style={[colorTheme === "light" ? ButtonStyle.lightcontainer : ButtonStyle.darkContainer]}>
                <ThemedText style={[colorTheme === 'light' ? ButtonStyle.lightTheme : ButtonStyle.darkTextTheme]} size="md" fontWt="semibold">
                    {name}
                </ThemedText>
            </Button>
        </>
    )
}


export default AppButton;