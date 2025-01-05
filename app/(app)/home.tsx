import ContainerView from "@/components/ContainerView";
import ThemedText from "@/components/ThemedText";
import React from "react";
import { Text } from "react-native";


const Home = () =>{
    return(
        <ContainerView>
            <ThemedText size="xl" fontWt="normal">
                Hello Themed Text
            </ThemedText>
        </ContainerView>
    )
}



export default Home;