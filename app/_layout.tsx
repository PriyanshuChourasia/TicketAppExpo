import { AuthContext } from "@/context/AuthContext/AuthContext";
import { CombineContextProvider } from "@/context/combineContext/CombineContextProvider";
import { Slot, useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {PaperProvider} from "react-native-paper";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { getAuthToken } from "@/services/AuthServices";
import ActivityLoaderNative from "@/components/ActivityLoaderNative";

const InitialLayout = () => {

    const {setIsAuthenticated} = useContext(AuthContext);
    const segments  = useSegments();
    const router = useRouter();

  useEffect(() => {

    const inTabsGroup = segments[0] === '(app)';

    const checkAuth = async() =>{
      const token = await getAuthToken();

      console.log("token",token);

      if(token !== undefined && !inTabsGroup)
      {
        setIsAuthenticated(true);
        
        if(!inTabsGroup)
        {
          router.replace('/(app)/home');
        }
      }
      else if(token == undefined )
      {
        router.replace('/(public)/login');
      }
    }
  
    checkAuth();

  },[segments]);

  return <Slot />;
};

export default function RootLayout() {

  const [loading,setLoading]  = useState<boolean>(true);
  const queryClient = new QueryClient();

  setTimeout(() => {
    setLoading(false);
  }, 700);

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <CombineContextProvider>
          <PaperProvider>
            {loading ? <ActivityLoaderNative/> : <InitialLayout /> }
          </PaperProvider>
      </CombineContextProvider>
      </QueryClientProvider>
    </>
  );
}
