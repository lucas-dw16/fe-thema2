import React from 'react';
import { View, Text, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@/src/navigation/StackNavigator';
import { styles } from '@/src/screens/styles/ProfileScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Profiel'>;

export function ProfileScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profiel</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Naam</Text>
        <Text style={styles.value}>Lucas de Wilde</Text>

        <Text style={styles.label}>Opleiding</Text>
        <Text style={styles.value}>Software Developer</Text>

        <Text style={styles.label}>Doel</Text>
        <Text style={styles.value}>Beter overzicht houden op schooltaken</Text>
      </View>

      <Pressable
        style={[styles.card, { marginTop: 24, backgroundColor: '#1F7A8C', paddingVertical: 12 }]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600', textAlign: 'center' }}>Terug naar Home</Text>
      </Pressable>
      <Pressable
        style={[styles.card, { marginTop: 12, backgroundColor: '#1F7A8C', paddingVertical: 12 }]}
        onPress={() => navigation.navigate('Instellingen')}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600', textAlign: 'center' }}>Naar Instellingen</Text>
      </Pressable>
    </View>
  );
}
