import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc'
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Components/Home'
import Details from './src/Components/Details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from "native-base";
import { useFonts } from 'expo-font';
import { useState,useEffect } from 'react';
import Search from './src/Components/Search';
export default function App() {

  const Stack=createNativeStackNavigator()
  const [loaded]=useFonts({
    "primary":require('./assets/IBMPlexSansArabic-Regular.ttf')
  })

  if(!loaded) return null
  return (
        <NativeBaseProvider >
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>
   </NavigationContainer>
   </NativeBaseProvider>
    
  );
}

const styles = StyleSheet.create({

});
