import React from 'react';
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import Theme from './src/styles/theme'
import {Login} from './src/screens/index'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold
} from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Archivo_400Regular,
    Archivo_600SemiBold,
    Inter_600SemiBold
  });
  
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={Theme}>
      <Login />
    </ThemeProvider>
  );
}

