import { AuthContext } from "@/context/AuthContext/AuthContext";
import { CombineContextProvider } from "@/context/combineContext/CombineContextProvider";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect } from "react";
import {PaperProvider} from "react-native-paper";

const InitialLayout = () => {

    const {isAuthenticated} = useContext(AuthContext);
    const segments  = useSegments();
    const router = useRouter();

  useEffect(() => {

    const inTabsGroup = segments[0] === '(app)';

    if(isAuthenticated && !inTabsGroup)
    {
      router.replace('/(app)/home');
    }else if(!isAuthenticated)
    {
      router.replace('/(public)/login');
    }

  },[isAuthenticated]);

  return <Slot />;
};

export default function RootLayout() {
  return (
    <>
      <CombineContextProvider>
          <PaperProvider>
            <InitialLayout />
          </PaperProvider>
      </CombineContextProvider>
    </>
  );
}
