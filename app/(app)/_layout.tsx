import { Tabs } from "expo-router"
import React from "react"


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
            }} />
            <Tabs.Screen name="profile" options={{
                headerShown:true,
                headerTitle:"Tile"
            }} />
        </Tabs>
    )
}