import { StyleSheet } from "react-native";





export const RegisterStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:1,
        width:'100%',
    },
    overlayContainer:{
        flex:1,
        backgroundColor:'#1a1a1a29',
        justifyContent:'center'
    }
});




export const RegisterFormStyle = StyleSheet.create({
    container:{
        backgroundColor:'transparent',
        paddingHorizontal:14
    },
    inputContainer:{
        marginTop:8,
        backgroundColor:'white',
        color:'black'
    }
})