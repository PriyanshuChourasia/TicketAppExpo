import { ThemedContainer } from "@/components/ThemedContainer";
import React from "react"
import { WelcomeStyle } from "./styles/WelcomeStyles";
import ThemedText from "@/components/ThemedText";
import WelcomeIcon from "@/components/WelcomeIcon";
import AppButton from "./components/LoginButton/AppButton";



const WelcomeScreen = () =>{
    return(
        <>
        <ThemedContainer style={WelcomeStyle.container}>
            <ThemedContainer>
                <ThemedText  size="large" fontWt="bold">
                    Welcome to Notify;
                </ThemedText>
                <ThemedText style={WelcomeStyle.titleStyle} size="md" fontWt="medium">
                    Organize your tasks, simplify your life.
                </ThemedText>
            </ThemedContainer>
            <ThemedContainer style={WelcomeStyle.iconContainer}>
                <WelcomeIcon/>
                <ThemedText style={WelcomeStyle.titleStyle} size="base" fontWt="semibold">
                    One step at a time, one task at a time, one success at a time.
                </ThemedText>
                <ThemedText style={WelcomeStyle.subTitleStyle} size="md" fontWt="normal">
                    Managing your work effectively is the first step toward achieving your goals. 
                    By breaking down tasks, prioritizing what matters, and staying organized,
                    you can transform chaos into clarity. 
                </ThemedText>
            </ThemedContainer>
            <ThemedContainer style={WelcomeStyle.centerContainer}>
                <AppButton name="Next" />
            </ThemedContainer>
          
        </ThemedContainer>
        </>
    )
}


export default WelcomeScreen;