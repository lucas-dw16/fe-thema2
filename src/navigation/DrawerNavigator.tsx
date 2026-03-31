import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomeScreen } from '@/src/screens/HomeScreen';
import { SettingsScreen } from '@/src/screens/SettingsScreen';
import { ProfileScreen } from '@/src/screens/ProfileScreen';
import { drawerScreenOptions } from '@/src/navigation/styles/drawerTheme';

export type RootDrawerParamList = {
  Home: undefined;
  Instellingen: undefined;
  Profiel: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={drawerScreenOptions}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Instellingen" component={SettingsScreen} />
        <Drawer.Screen name="Profiel" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
