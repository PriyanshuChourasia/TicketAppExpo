import { StyleSheet, View, ViewProps } from "react-native";
import React from "react";





const JumbotronView = ({style,children}:ViewProps) =>{
    return(
        <View style={[styles.container,style]}>
            {children}
        </View>
    )
}


export default JumbotronView;


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:2,
        paddingVertical:2,
        overflow:'hidden'
    }
})