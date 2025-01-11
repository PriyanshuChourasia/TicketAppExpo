import { ThemedContainer } from "@/components/ThemedContainer";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';   
import { useGetGroupItemById } from "../hooks/useGetGroupItemById";
import { ProfileContext } from "../../Profile/context/ProfileContext";



interface IAddInput{
    textInput:string;
    setTextInput:(text:string)=>void;
    onModal:boolean;
    setOnModal:(modal:boolean)=> void;
}




const AddInput: React.FC<IAddInput> = ({textInput,setOnModal,setTextInput,onModal}) =>{

    const {profileData} = useContext(ProfileContext);
    const {data,isSuccess} = useGetGroupItemById(profileData ? profileData.data.id : '');

    useEffect(()=>{
        if(isSuccess)
        {
            console.log("Data: ",data.data);
        }
    },[data,isSuccess]);


    const handleChange = (text:string) =>{
        setTextInput(text);
    }

    return(
        <>
            <ThemedContainer style={InputStyle.container}>
                <TextInput
                    label={'Group Name'}
                    onChangeText={(e)=>handleChange(e)}
                    value={textInput}
                    outlineColor="black"
                    textColor="black"
                    mode="outlined"
                    activeOutlineColor="black"
                    style={InputStyle.textcontainer}
                    placeholderTextColor={'black'}
                />
                <MaterialIcons onPress={()=>setOnModal(!onModal)} name="add-circle-outline" size={35} color="black" />
            </ThemedContainer>
        </>
    )
}




export default AddInput;





const InputStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        overflow:'hidden',
        alignItems:'center',
        gap:4,
        justifyContent:'center'
    },
    textcontainer:{
        backgroundColor:'white',
        width:'85%'
    }
})