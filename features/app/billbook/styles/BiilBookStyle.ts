import { AppColors } from "@/constants/Colors";
import { StyleSheet } from "react-native";



export const BillBookStyle = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:8,
        paddingVertical:8
    },
    bookContainer:{
        width:'100%',
        borderWidth:2,
        borderColor: AppColors.black,
        paddingHorizontal:5,
        paddingVertical:8
    }
})