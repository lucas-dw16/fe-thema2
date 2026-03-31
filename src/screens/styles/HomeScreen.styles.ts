import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    padding: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#334155',
    marginBottom: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  searchButton: {
    backgroundColor: '#1F7A8C',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  searchButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: '#B91C1C',
    marginBottom: 10,
    fontSize: 14,
  },
  loadingWrapper: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 8,
    color: '#475569',
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 14,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#334155',
    marginBottom: 8,
  },
  cardMeta: {
    fontSize: 12,
    color: '#64748B',
  },
  emptyText: {
    fontSize: 14,
    color: '#64748B',
    paddingVertical: 16,
  },
  navButtonsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },
  navButton: {
    flex: 1,
    backgroundColor: '#0EA5E9',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
