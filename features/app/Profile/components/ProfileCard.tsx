import React, { useCallback, useContext, useEffect } from "react";
import { ProfileContext } from "../context/ProfileContext";
import { Alert, Dimensions, Image, StyleSheet } from "react-native";
import { ThemedContainer } from "@/components/ThemedContainer";
import ThemedText from "@/components/ThemedText";
import { useFocusEffect } from "expo-router";
import { getProfileData } from "../services/profileServices";
import { TextInput } from "react-native-paper";


const Logo = require('@/assets/appIcon/welcome.png');




const ProfileCard =() =>{
    const {profileData,setProfileData} = useContext(ProfileContext);

  
    useFocusEffect(
        useCallback(()=>{
            const fetchData = async () =>{
                const profile = await getProfileData();
                setProfileData(profile);
            };
            fetchData();
        },[])
    );




    return(
        <>
           <ThemedContainer style={ProfileStyle.container}>
            <ThemedContainer style={ProfileStyle.cardContainer}>
                <ThemedContainer style={ProfileStyle.cardContainer1}>
                    <Image resizeMode="cover" resizeMethod="auto" style={ProfileStyle.image} source={Logo} />
                </ThemedContainer>
                <ThemedContainer style={ProfileStyle.cardContainer2}>
                    <TextInput 
                    value={profileData?.data.username}
                    style={ProfileStyle.text1}
                    mode="outlined"
                    outlineColor="black"
                    textColor="black"
                    activeOutlineColor="black"
                    activeUnderlineColor="black"
                    onBlur={()=> Alert.alert("Hello")}
                    /> 
                    <TextInput 
                    value={profileData?.data.email}
                    style={ProfileStyle.text2}
                    mode="outlined"
                    outlineColor="black"
                    textColor="black"
                    activeOutlineColor="black"
                    activeUnderlineColor="black"
                    />
                </ThemedContainer>
            </ThemedContainer>
           </ThemedContainer>
        </>
    )
}



export default ProfileCard;


const {height,width} = Dimensions.get('screen');

const imageHeight = Math.floor(height * 0.12);
const imageWidth = Math.floor(width * 0.26);


const cardHeight = height * 0.31;
const cardWidth = width * 0.9



const ProfileStyle = StyleSheet.create({
    container:{
       overflow: 'hidden',
       justifyContent:'center',
       width:'100%',
       alignItems:'center',
    },
    image:{
        width:imageWidth,
        height:imageHeight,
        borderRadius: imageHeight + imageWidth /2,
        borderWidth:2
    },
    cardContainer:{
        height: cardHeight,
        width: cardWidth,
        paddingVertical:8,
        paddingHorizontal:8,
        borderColor:'black',
        backgroundColor:'white',
        borderWidth:2,
        borderRadius: 10,
        overflow:'hidden',
        flexDirection:'column'
    },
    cardContainer1:{
        justifyContent:'center',
        alignItems:"center",
        paddingVertical:4,
        paddingHorizontal:4,
        height:'50%'
    },

    text1:{
        backgroundColor:'white',
        fontSize:22,
        textAlign:'center',
        fontWeight:'700'
    },
    text2:{
        backgroundColor:'white',
        fontSize:18,
        textAlign:'center',
        fontWeight:'600',
        marginTop:8
    },

    cardContainer2:{
        paddingVertical:8,
        paddingHorizontal:10,
        height: '50%',
    }
})