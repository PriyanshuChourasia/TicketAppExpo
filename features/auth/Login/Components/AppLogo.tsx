import JumbotronView from '@/components/JumbotronView'
import React from 'react'
import { Image } from 'react-native';
import { LogoStyles } from '../styles/LogoStyles';

const Logo  = require('../../../../assets/images/icon.png');

const AppLogo = () => {
  return (
    <JumbotronView style={LogoStyles.container}>
        <Image source={Logo} style={LogoStyles.imageContainer} />
    </JumbotronView>
  )
}



export default AppLogo;
