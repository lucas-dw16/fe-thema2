import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '@/src/screens/styles/ProfileScreen.styles';

export function ProfileScreen() {
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
    </View>
  );
}
