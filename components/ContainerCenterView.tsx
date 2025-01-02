import React from "react";
import { StyleSheet, View } from "react-native";



const ContainerCenterView = ({children}:any) =>{
    return(
        <View style={styles.container}>
            {children}
        </View>
    )
}



export default ContainerCenterView;



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        paddingHorizontal:10,
        paddingVertical:10,
        overflow:'hidden'
    }
})