import FomrikErrorText from "@/components/FormikErrorText";
import ThemedButton from "@/components/ThemedButton";
import { ThemedContainer } from "@/components/ThemedContainer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Formik } from "formik";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { RegisterInitialState } from "../initialState/RegisterInitialState";
import { LoginStyles } from "../../Login/styles/LoginStyles";
import { RegisterFormStyle } from "../styles/RegisterStyle";
import { useRegister } from "../hooks/useRegister";





const RegisterForm = () =>{

    const [isLoading,setIsLoading] = useState<boolean>(false);
    const {mutate} = useRegister();



    return(
        <ThemedContainer style={RegisterFormStyle.container}>
            <Formik
                initialValues={RegisterInitialState}
                onSubmit={(values,action)=>{
                    setIsLoading(true);
                    setTimeout(() => {
                        mutate({
                            username:values.username,
                            email:values.email,
                            password:values.password
                        })
                        action.setSubmitting(true);
                        setIsLoading(false);
                    }, 800);
                }}
            >
            {
                ({handleChange,handleBlur,handleSubmit,values,errors}) => (
                    <ThemedContainer style={RegisterFormStyle.container}>
                        <TextInput
                            id="username"
                            label={'Username'}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                            style={RegisterFormStyle.inputContainer}
                            mode="outlined"
                            outlineColor="black"
                            textColor="black"
                            activeOutlineColor="black"
                            right={
                                <TextInput.Icon icon={()=> <FontAwesome name="user" size={21} color={'black'} />}/>
                            }
                        />
                        {errors.username && <FomrikErrorText msg={errors.username} />}
                        <TextInput
                            id="email"
                            label={'Email'}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            style={RegisterFormStyle.inputContainer}
                            mode="outlined"
                            outlineColor="black"
                            textColor="black"
                            activeOutlineColor="black"
                            right={
                                <TextInput.Icon icon={()=> <FontAwesome name="user" size={21} color={'black'} />}/>
                            }
                        />
                        {errors.email && <FomrikErrorText msg={errors.email} />}
                        <TextInput
                            id="password"
                            label={'Password'}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry
                            style={RegisterFormStyle.inputContainer}
                            mode="outlined"
                            outlineColor="black"
                            activeOutlineColor="black"
                            textColor="black"
                            right={
                                <TextInput.Icon icon={()=><FontAwesome5 name="eye" size={20} color="black" />} />
                            }
                        />
                         {errors.password && <FomrikErrorText msg={errors.password} />}
                        
                        <ThemedButton marginY={20}  onButtonPress={handleSubmit} name="Register" isBtnLoading={isLoading} />
                    </ThemedContainer>
                )
            }
            </Formik>
        </ThemedContainer>
    )
}



export default RegisterForm;