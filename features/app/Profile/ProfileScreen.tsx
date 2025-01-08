import { ThemedContainer } from '@/components/ThemedContainer';
import React, { useContext, useEffect } from 'react'
import { useGetProfileInfo } from './hooks/useGetProfileInfo';
import { storeProfileData } from './services/profileServices';
import { ProfileContext } from './context/ProfileContext';
import ProfileCard from './components/ProfileCard';
import { ProfileStyles } from './styles/ProfileStyles';
import LogoutButton from './components/LogoutButton';




const ProfileScreen = () => {


  

  return (
    <ThemedContainer style={ProfileStyles.container}>
      <ProfileCard/>
      <LogoutButton/>
    </ThemedContainer>
  )
}




export default ProfileScreen;