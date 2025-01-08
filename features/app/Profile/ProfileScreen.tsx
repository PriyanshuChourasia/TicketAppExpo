import { ThemedContainer } from '@/components/ThemedContainer';
import React, { useContext, useEffect } from 'react'
import { useGetProfileInfo } from './hooks/useGetProfileInfo';
import { storeProfileData } from './services/profileServices';
import { ProfileContext } from './context/ProfileContext';
import ProfileCard from './components/ProfileCard';
import { ProfileStyles } from './styles/ProfileStyles';
import LogoutButton from './components/LogoutButton';




const ProfileScreen = () => {

  const {setProfileData} = useContext(ProfileContext);
  const {data,isSuccess} = useGetProfileInfo();

  useEffect(()=>{
    if(isSuccess)
    {
      storeProfileData(data.data);
      setProfileData(data.data);
    }
  },[isSuccess]);

  

  return (
    <ThemedContainer style={ProfileStyles.container}>
      <ProfileCard/>
      <LogoutButton/>
    </ThemedContainer>
  )
}




export default ProfileScreen;