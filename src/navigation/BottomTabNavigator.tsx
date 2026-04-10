import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@/src/screens/HomeScreen';
import { SettingsScreen } from '@/src/screens/SettingsScreen';
import { ProfileScreen } from '@/src/screens/ProfileScreen';
import { bottomTabScreenOptions } from '@/src/navigation/styles/bottomTabTheme';

export type RootTabParamList = {
  // Beschikbare tab schermen
  Home: undefined;
  Instellingen: undefined;
  Profiel: undefined;
};

// Maak de tab navigator aan
const Tab = createBottomTabNavigator<RootTabParamList>();

export function BottomTabNavigator() {
  return (
    // Container voor navigatie
    <NavigationContainer>
      {/* Tabs en schermen, */}
      <Tab.Navigator initialRouteName="Home" screenOptions={bottomTabScreenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Instellingen" component={SettingsScreen} />
        <Tab.Screen name="Profiel" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
