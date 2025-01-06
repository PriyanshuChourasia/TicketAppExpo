import React from "react";
import LoginForm from "./Components/LoginForm";
import { LoginStyles } from "./styles/LoginStyles";
import AppLogo from "./Components/AppLogo";
import { ThemedContainer } from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import { AppColors } from "@/constants/Colors";
import { LoginButtonStyle } from "./styles/LogoStyles";
import { Button, Divider } from "react-native-paper";
import AntDesign from '@expo/vector-icons/AntDesign';
import ThemedButton from "@/components/ThemedButton";
import { useRouter } from "expo-router";

const LoginScreen = () => {

  const router = useRouter();

  const onHandlePress = () =>{
    router.push("/(public)/register");
  }


  return (
    <ThemedContainer style={LoginStyles.container}>
      <ThemedContainer style={LoginStyles.container1}>
        <AppLogo />
        <ThemedText alignCenter size="xxl" fontWt="bold">
            Notify
        </ThemedText>
        <ThemedText alignCenter  size='md'>
            Your work, your way—simplified.
        </ThemedText>
      </ThemedContainer>
      <ThemedContainer style={LoginStyles.container2}>
        <LoginForm />
        <Divider bold style={LoginButtonStyle.dividerStyle} />
        <ThemedContainer style={LoginButtonStyle.container}>
          <ThemedButton name="Register" onButtonPress={onHandlePress} marginY={20} />
         <Button icon={'google'} rippleColor={AppColors.gray.gray500} mode="outlined" style={{backgroundColor:"white",borderColor:"black"}} textColor="black">
           Sign In with Google
         </Button>
        </ThemedContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default LoginScreen;
