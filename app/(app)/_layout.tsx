import { Tabs } from "expo-router"
import React from "react"
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function HomeLayout(){
    return(
        <Tabs
        screenOptions={{
            headerShadowVisible:true,
            headerStyle:{
                backgroundColor:'skyblue'
            }
        }}
        >
            <Tabs.Screen name="home" options={{
                headerShown:true,
                headerTitle:"Home",
                tabBarIcon:() => <Feather name="home" size={24} color="black" />
            }} />
            <Tabs.Screen name="profile" options={{
                headerShown:true,
                headerTitle:"Profile",
                tabBarIcon:() => <AntDesign name="user" size={24} color="black" />
            }} />
        </Tabs>
    )
}