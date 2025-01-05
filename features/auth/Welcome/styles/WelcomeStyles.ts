import { StyleSheet } from "react-native";




export const WelcomeStyle = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:40,
        paddingVertical:20,
        overflow: 'hidden',
        justifyContent:'space-around',
        
    },
    centerContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    iconContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle:{
        textAlign:'center'
    },
    subTitleStyle:{
        textAlign:'justify',
        marginTop:'8%'
    },
    centerText:{
        textAlign:"center"
    }
})