import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '@/src/screens/HomeScreen';
import { SettingsScreen } from '@/src/screens/SettingsScreen';
import { ProfileScreen } from '@/src/screens/ProfileScreen';
import { stackScreenOptions } from '@/src/navigation/styles/stackTheme';

export type RootStackParamList = {
  // Beschikbare stack schermen
  Home: undefined;
  Instellingen: undefined;
  Profiel: undefined;
};

// Maak de stack navigator aan
const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigator() {
  return (
    // Container voor navigatie
    <NavigationContainer>
      {/* Stack en schermen */}
      <Stack.Navigator initialRouteName="Home" screenOptions={stackScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Instellingen" component={SettingsScreen} />
        <Stack.Screen name="Profiel" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
