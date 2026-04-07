import React, { useState } from 'react';
import { View, Text, Switch, Pressable } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@/src/navigation/StackNavigator';
import { styles } from '@/src/screens/styles/SettingsScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Instellingen'>;

export function SettingsScreen({ navigation }: Props) {
  // Eenvoudige toggle voor herinneringen
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      {/* Titel en uitleg */}
      <Text style={styles.title}>Instellingen</Text>
      <Text style={styles.description}>
        Hier kun je basisinstellingen aanpassen voor je app.
      </Text>

      {/* Rij met de schakelaar */}
      <View style={styles.row}>
        <Text style={styles.label}>Herinneringen aanzetten</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ false: '#CBD5E1', true: '#7DD3FC' }}
          thumbColor={notificationsEnabled ? '#0369A1' : '#94A3B8'}
        />
      </View>

      <Text style={styles.status}>
        Status: {notificationsEnabled ? 'Aan' : 'Uit'}
      </Text>

      {/* Navigatie knoppen */}
      <Pressable
        style={[styles.row, { marginTop: 24, backgroundColor: '#1F7A8C' }]}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>Terug naar Home</Text>
      </Pressable>
      <Pressable
        style={[styles.row, { marginTop: 12, backgroundColor: '#1F7A8C' }]}
        onPress={() => navigation.navigate('Profiel')}>
        <Text style={{ color: '#FFFFFF', fontWeight: '600' }}>Naar Profiel</Text>
      </Pressable>
    </View>
  );
}
