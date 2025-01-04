import {Button, TextInput} from "react-native-paper";
import {Formik} from "formik";
import LoginInitialState from "../initialState/LoginInitialState";
import { View } from "react-native";
import { LoginStyles } from "../styles/LoginStyles";
import FontAwesome  from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext/AuthContext";
import { useRouter } from "expo-router";
import { storeToken } from "@/services/AuthServices";
import { useGetLogin } from "../hooks/useGetLogin";



const LoginForm = () =>{

    const {mutate} = useGetLogin();
    const {setIsAuthenticated}  = useContext(AuthContext);
    const router = useRouter();


    return(
        <Formik
        initialValues={LoginInitialState}
        onSubmit={(values,action)=>{
            mutate({email:values.email,password:values.password});
            setTimeout(()=>{
               action.setSubmitting(true);
            },500);
            
        }}
        >
            {
                ({handleChange,handleBlur,handleSubmit,values}) => (
                    <View>
                        <TextInput
                            label={'Username'}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            style={LoginStyles.inputContainer}
                            mode="outlined"
                            outlineColor="black"
                            activeOutlineColor="black"
                            right={
                                <TextInput.Icon icon={()=> <FontAwesome name="user" size={21} color={'black'} />}/>
                            }
                        />
                        <TextInput
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

                        <Button
                         onPress={()=>handleSubmit()} 
                         mode="elevated" 
                         style={LoginStyles.buttonStyle}
                         buttonColor="black"
                         textColor="white"
                         >
                            Login
                        </Button>
                    </View>
                )
            }
        </Formik>
    )
}

export default LoginForm;