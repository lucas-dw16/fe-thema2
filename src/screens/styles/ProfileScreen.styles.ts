import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Hoofdcontainer van het scherm
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 24,
    justifyContent: 'center',
  },
  // Grote titel bovenaan
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 18,
  },
  // Kaart met profielinformatie
  card: {
    backgroundColor: '#E2E8F0',
    borderRadius: 14,
    padding: 18,
  },
  // Label boven een waarde
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#475569',
    marginTop: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  // Waarde van profielgegevens
  value: {
    fontSize: 17,
    color: '#0F172A',
    marginTop: 4,
  },
});
