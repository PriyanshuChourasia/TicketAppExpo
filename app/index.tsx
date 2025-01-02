import React from "react";
import ContainerCenterView from "@/components/ContainerCenterView";
import { ActivityIndicator } from "react-native";



const App = () =>{

  


    return(
        <ContainerCenterView>
           <ActivityIndicator animating={true} color={'blue'} size={'large'} />
        </ContainerCenterView>
    )
}


export default App;