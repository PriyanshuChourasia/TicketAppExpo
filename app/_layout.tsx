import { AuthContext } from "@/context/AuthContext/AuthContext";
import { CombineContextProvider } from "@/context/combineContext/CombineContextProvider";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {PaperProvider} from "react-native-paper";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {  clearStorage, getAuthToken } from "@/services/AuthServices";
import ActivityLoaderNative from "@/components/ActivityLoaderNative";
import Toast from "react-native-toast-message";
import { getProfileData } from "@/features/app/Profile/services/profileServices";

const InitialLayout = () => {

    const {setIsAuthenticated} = useContext(AuthContext);
    const segments  = useSegments();
    const router = useRouter();

 
  



  useEffect(() => {

    const inTabsGroup = segments[0] === '(app)';

    const checkAuth = async() =>{
      const token = await getAuthToken();
      const profile = await getProfileData();
      if(token !== undefined && !inTabsGroup)
      {
        setIsAuthenticated(true);
        
        if(!inTabsGroup)
        {
          router.replace('/(app)/home');
        }
      }
      else if(token == undefined && profile === null)
      {
        clearStorage();
        router.replace('/(public)/welcome');
      }
    }
  
    checkAuth();

  },[]);

  return <Slot />;
};

export default function RootLayout() {

  const [loading,setLoading]  = useState<boolean>(true);
  const queryClient = new QueryClient();

  setTimeout(() => {
    setLoading(false);
  }, 300);

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <CombineContextProvider>
          <PaperProvider>
          {loading ?  <ActivityLoaderNative/> : <InitialLayout/>}
          <Toast/>
          </PaperProvider>
      </CombineContextProvider>
      </QueryClientProvider>
    </>
  );
}
