import { Tabs } from "expo-router"
import React from "react"
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from "@/constants/Colors";


export default function HomeLayout(){
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
            <Tabs.Screen name="profile" options={{
                headerShown:false,
                headerTitle:"Profile",
                tabBarIcon:() => <AntDesign name="user" size={24} color="black" />
            }} />
        </Tabs>
    )
}