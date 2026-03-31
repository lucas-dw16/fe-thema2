import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

import { styles } from '@/src/screens/styles/SettingsScreen.styles';

export function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instellingen</Text>
      <Text style={styles.description}>
        Hier kun je basisinstellingen aanpassen voor je app.
      </Text>

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
    </View>
  );
}
