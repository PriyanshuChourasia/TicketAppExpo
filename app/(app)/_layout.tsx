import { Tabs } from "expo-router"
import React, { useContext, useEffect } from "react"
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from "@/constants/Colors";
import { ProfileContext } from "@/features/app/Profile/context/ProfileContext";
import { useGetProfileInfo } from "@/features/app/Profile/hooks/useGetProfileInfo";
import { storeProfileData } from "@/features/app/Profile/services/profileServices";
import { clearStorage } from "@/services/AuthServices";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function HomeLayout(){

       const {setProfileData} = useContext(ProfileContext);
        const {data,isSuccess,isError} = useGetProfileInfo();
      
        useEffect(()=>{
          if(isSuccess)
          {
            storeProfileData(data.data);
            setProfileData(data.data);
          }
          else if(isError)
          {
            clearStorage();
            
          }
        },[isSuccess,isError]);


    return(
        <Tabs
        screenOptions={{
            headerShadowVisible:false,
        }}
        >
            <Tabs.Screen name="home" options={{
                headerShown:true,
                headerTitle:"Home",
                tabBarIcon:() => <Feather name="home" size={24} color="black" />,
                headerStyle:{
                    backgroundColor: Colors.dark.background,
                },
                headerTitleStyle:{
                    color: Colors.dark.text
                }
            }} />
            <Tabs.Screen name="billbook" options={{
                headerShown:true,
                headerTitle:"Bill Book",
                tabBarIcon:() => <FontAwesome name="list-alt" size={24} color="black" />,
                headerStyle:{
                    backgroundColor: Colors.dark.background,
                },
                headerTitleStyle:{
                    color: Colors.dark.text
                }
            }} />
            <Tabs.Screen name="profile" options={{
                headerShown:false,
                headerTitle:"Profile",
                tabBarIcon:() => <AntDesign name="user" size={24} color="black" />
            }} />
        </Tabs>
    )
}