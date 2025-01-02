import React from "react"
import { StyleSheet, Text, View } from "react-native"

const ContainerView = ({children}:any) =>{
    return(
        <>
        <View style={styles.container}>
            {children}
        </View>
        </>
    )
}



export default ContainerView;



const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        overflow: 'hidden'
    }
})