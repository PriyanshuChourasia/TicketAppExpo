import { ThemedContainer } from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { BillBookStyle } from "./styles/BiilBookStyle";



const BillBookScreen = () =>{
    return(
        <>
        <ThemedContainer style={BillBookStyle.container}>
            <ThemedText size="md">
                Hello home
            </ThemedText>
        </ThemedContainer>
        </>
    )
}


export default BillBookScreen;