import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { DrawerNavigator } from '@/src/navigation/DrawerNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <DrawerNavigator />
    </>
  );
}
