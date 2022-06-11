import React from 'react';

import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular,Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_400Regular,Rajdhani_500Medium,Rajdhani_600SemiBold,Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { Background } from './src/components/background';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_400Regular,
    Rajdhani_500Medium,
    Rajdhani_600SemiBold,
    Rajdhani_700Bold,
    
    
  })
 if(!fontsLoaded){
   return <AppLoading/>
 }


  return (
    
    <Background>

       <StatusBar
            barStyle={"light-content"}
            backgroundColor = 'transparent'
            translucent
            />
          <AuthProvider>
             <Routes/>
          </AuthProvider>
 
        
    </Background>
   
   
  );
}


