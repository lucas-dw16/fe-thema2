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
    marginBottom: 12,
  },
  // Korte uitleg onder de titel
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#334155',
    marginBottom: 24,
  },
  // Rij voor een instelling
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E2E8F0',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  // Tekst links in de rij
  label: {
    fontSize: 16,
    color: '#1E293B',
    fontWeight: '600',
  },
  // Kleine status tekst onderaan
  status: {
    marginTop: 16,
    fontSize: 15,
    color: '#475569',
  },
});
