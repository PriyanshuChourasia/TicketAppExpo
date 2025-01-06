import { TextInput} from "react-native-paper";
import {ErrorMessage, Formik} from "formik";
import LoginInitialState from "../initialState/LoginInitialState";
import { LoginStyles } from "../styles/LoginStyles";
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from "expo-router";
import { useGetLogin } from "../hooks/useGetLogin";
import ThemedButton from "@/components/ThemedButton";
import { ThemedContainer } from "@/components/ThemedContainer";
import { useState } from "react";
import { UserFormSchema } from "../hooks/UserFormSchema";
import FomrikErrorText from "@/components/FormikErrorText";




const LoginForm = () =>{

    const {mutate} = useGetLogin();
    const [isLoading,setIsLoading] = useState<boolean>(false);

    return(
        <Formik
        initialValues={LoginInitialState}
        validationSchema={UserFormSchema}
        onSubmit={(values,action)=>{
            setIsLoading(true);
            mutate({email:values.email,password:values.password});
            setTimeout(()=>{
               action.setSubmitting(true);``
               setIsLoading(false);
            },1100);
            
        }}
        >
            {
                ({handleChange,handleBlur,handleSubmit,values,errors}) => (
                    <ThemedContainer>
                        <TextInput
                            id="email"
                            label={'Username'}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            style={LoginStyles.inputContainer}
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
                            style={LoginStyles.inputContainer}
                            mode="outlined"
                            outlineColor="black"
                            activeOutlineColor="black"
                            textColor="black"
                            right={
                                <TextInput.Icon icon={()=><FontAwesome5 name="eye" size={20} color="black" />} />
                            }
                        />
                         {errors.password && <FomrikErrorText msg={errors.password} />}
                        
                        <ThemedButton marginY={20}  onButtonPress={handleSubmit} name="Login" isBtnLoading={isLoading} />
                    </ThemedContainer>
                )
            }
        </Formik>
    )
}

export default LoginForm;