import React from 'react';
import AppLoading from  'expo-app-loading'

import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light
} from '@expo-google-fonts/roboto'


import Routes from './src/routes';


export default function App() {
 
    const[fontsLoaded] = useFonts({
      Roboto_700Bold,
      Roboto_300Light
    })
  
    if(!fontsLoaded)
      return <AppLoading></AppLoading>
  return (
      <Routes />
  );
}
