import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { UserContextProvider } from './src/contexts/UserContextProvider';
import Router from './src/router';

export default function App() {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
}

