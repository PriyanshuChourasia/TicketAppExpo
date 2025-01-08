import { ThemedContainer } from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { HomeStyles } from "./styles/HomeStyles";



const HomeScreen = () =>{
    return(
        <>
        <ThemedContainer style={HomeStyles.container}>
            <ThemedText size="md">
                Hello home
            </ThemedText>
        </ThemedContainer>
        </>
    )
}


export default HomeScreen;