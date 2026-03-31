import React from 'react';
import { View, Text, Pressable } from 'react-native';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import type { RootTabParamList } from '@/src/navigation/BottomTabNavigator';
import { styles } from '@/src/screens/styles/HomeScreen.styles';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welkom bij School Planner.</Text>
      <Text style={styles.description}>
        Gebruik de navigatiebalk onderaan om naar Instellingen en Profiel te gaan.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Profiel')}>
        <Text style={styles.buttonText}>Ga naar Profiel</Text>
      </Pressable>
    </View>
  );
}
