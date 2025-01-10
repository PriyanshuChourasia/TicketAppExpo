import { Form, Formik } from "formik";
import React, { useState } from "react"
import { GroupRequestInitialState } from "../initialState/GroupRequestInitialState";
import { GroupFormSchema } from "../hooks/GroupFormSchema";
import { Button, TextInput } from "react-native-paper";
import { ThemedContainer } from "@/components/ThemedContainer";
import { StyleSheet } from "react-native";
import { AppColors } from "@/constants/Colors";
import ThemedText from "@/components/ThemedText";
import { usePostItemGroupData } from "../hooks/usePostGroupData";



interface IAddGroupForm{
    setCloseModal:(modal:boolean) => void;
}




const AddGroupForm: React.FC<IAddGroupForm> =  ({setCloseModal}) =>{

    const [isLoading,setIsLoading] = useState<boolean>(false);
    const {mutate} =  usePostItemGroupData();


    return(
        <ThemedContainer style={AddGroupStyle.container}>
            <Formik
                onSubmit={(values,aciton)=>{
                    mutate({
                        name:values.name,
                        alias:values.alias
                    });
                    setIsLoading(true);
                    setTimeout(() => {
                        aciton.setSubmitting(true);
                        setIsLoading(false);
                        setCloseModal(false);
                    }, 600);
                }}
                validationSchema={GroupFormSchema}
                initialValues={GroupRequestInitialState}
            >
                {
                    ({handleBlur,handleChange,handleSubmit,values})=>(
                        <ThemedContainer>
                            <ThemedContainer>
                                <ThemedText size="lg" fontWt="medium">
                                    Item Group:
                                </ThemedText>
                            </ThemedContainer>
                            <TextInput
                            id="name"
                            label={"Group Name"}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            mode="outlined"
                            outlineColor="black"
                            textColor="black"
                            activeOutlineColor="black"
                            style={AddGroupStyle.textContainer}
                            />
                            <TextInput
                            id="alias"
                            label={"Group alias Name"}
                            onChangeText={handleChange('alias')}
                            onBlur={handleBlur('alias')}
                            value={values.alias}
                            mode="outlined"
                            outlineColor="black"
                            textColor="black"
                            activeOutlineColor="black"
                            style={AddGroupStyle.textContainer}
                            />

                            <ThemedContainer style={AddGroupStyle.buttonContainer}>
                                <Button onPress={()=>setCloseModal(false)}  textColor="red" style={AddGroupStyle.cancelbuttonStyle}>
                                    Cancel
                                </Button>
                                <Button loading={isLoading} onPress={()=>handleSubmit()} rippleColor={AppColors.gray.gray700} textColor="green" style={AddGroupStyle.submitbuttonStyle}>
                                    Submit
                                </Button>
                            </ThemedContainer>
                        </ThemedContainer>
                    )
                }
            </Formik>
        </ThemedContainer>
    )
}




export default AddGroupForm;



const AddGroupStyle = StyleSheet.create({
    container:{
        flex:1,
    },
    textContainer:{
        backgroundColor:'white',
        color:'black',
        marginTop:5
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:25
    },
    cancelbuttonStyle:{
        backgroundColor:'white',
        borderColor:AppColors.red.red600,
        borderWidth:2,
        paddingHorizontal:10
    },
    submitbuttonStyle:{
        backgroundColor:'white',
        borderColor:AppColors.green.green600,
        borderWidth:2,
        paddingHorizontal:10
    }
})