import React from "react";
import ContainerCenterView from "./ContainerCenterView";
import { ActivityIndicator } from "react-native";


const ActivityLoaderNative = () =>{
    return(
        <ContainerCenterView>
            <ActivityIndicator color={'blue'} size={'large'} animating={true} />
        </ContainerCenterView>
    )
}

export default ActivityLoaderNative;