import { ThemedContainer } from "@/components/ThemedContainer";
import React, { useCallback, useState } from "react";
import { BillBookStyle } from "./styles/BiilBookStyle";
import AddInput from "./components/AddInput";
import { ModalView } from "@/components/ModalView";
import AddGroupForm from "./components/AddGroupForm";
import { useFocusEffect } from "expo-router";
import { useQueryClient } from "@tanstack/react-query";



const BillBookScreen = () =>{

    const [groupInput,setGroupInput] = useState<string>('');
    const [groupModal,setGroupModal] = useState<boolean>(false);
    const queryClient = useQueryClient();

    useFocusEffect(
        useCallback(()=>{
            console.log("Hello")
        },[])
    );

    return(
        <>
        <ThemedContainer style={BillBookStyle.container}>
            <ThemedContainer style={BillBookStyle.bookContainer}>
                <AddInput setTextInput={setGroupInput} textInput={groupInput} setOnModal={setGroupModal} onModal={groupModal} />
            </ThemedContainer>
            {
                groupModal
                &&
                <ModalView isVisible={groupModal} setIsVisible={setGroupModal}>
                    <AddGroupForm setCloseModal={setGroupModal} />
                </ModalView>
            }
        </ThemedContainer>

        </>
    )
}


export default BillBookScreen;