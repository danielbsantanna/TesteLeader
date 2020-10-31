import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { isSignedIn } from "./src/services/auth";
import { createRootNavigator, SignedOutRoutes, SignedInRoutes } from './src/routes';
import Splash from './src/components/Splash';


export default function App() {
  const [autorizado, setAutorizado] = useState(false);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    isSignedIn()
    .then(res => {
      setAutorizado(res);
      setCarregado(true)})
    .catch(err => alert("Erro"));
  });

  const Layout = carregado ? createRootNavigator(autorizado) : Splash;
  
  return (
    <Layout />
  );
}


