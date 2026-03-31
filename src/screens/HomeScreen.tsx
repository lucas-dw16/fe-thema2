import React from 'react';
import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@/src/navigation/StackNavigator';
import { styles } from '@/src/screens/styles/HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Welkom bij School Planner.</Text>
      <Text style={styles.description}>
        Gebruik de knoppen hieronder om naar andere schermen te gaan.
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Instellingen')}>
        <Text style={styles.buttonText}>Naar Instellingen</Text>
      </Pressable>
      <Pressable
        style={[styles.button, { marginTop: 12 }]}
        onPress={() => navigation.navigate('Profiel')}>
        <Text style={styles.buttonText}>Naar Profiel</Text>
      </Pressable>
    </View>
  );
}
