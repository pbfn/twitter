import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import AppLoading from  'expo-app-loading'

import {
  useFonts,
  Roboto_700Bold,
  Roboto_300Light
} from '@expo-google-fonts/roboto'
import HomePage from './src/pages/HomePage';


export default function App() {
 
    const[fontsLoaded] = useFonts({
      Roboto_700Bold,
      Roboto_300Light
    })
  
    if(!fontsLoaded)
      return <AppLoading></AppLoading>
  return (
      <HomePage></HomePage>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
