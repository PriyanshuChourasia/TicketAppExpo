import {TextInput} from "react-native-paper";
import {Formik} from "formik";
import LoginInitialState from "../initialState/LoginInitialState";
import { View } from "react-native";
import { LoginStyles } from "../styles/LoginStyles";



const LoginForm = () =>{
    return(
        <Formik
        initialValues={LoginInitialState}
        onSubmit={(values)=>{
            console.log(values);
        }}
        >
            {
                ({handleChange,handleBlur,handleSubmit,values}) => (
                    <View style={LoginStyles.container}>
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
                            textColor="black"
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
                        />
                    </View>
                )
            }
        </Formik>
    )
}

export default LoginForm;