import React, { useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from '@/src/navigation/StackNavigator';
import { searchNews, type NewsArticle } from '@/src/services/newsApi';
import { styles } from '@/src/screens/styles/HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const hasResults = useMemo(() => articles.length > 0, [articles]);

  async function handleSearch() {
    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      setErrorMessage('Vul eerst een zoekterm in.');
      setArticles([]);
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const result = await searchNews(trimmedQuery);

      if (result.length === 0) {
        setErrorMessage('Geen resultaten gevonden voor deze zoekterm.');
      }

      setArticles(result);
    } catch {
      setArticles([]);
      setErrorMessage('Nieuws ophalen is mislukt. Controleer je verbinding of API-key.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nieuwszoekmachine</Text>
      <Text style={styles.subtitle}>Zoek nieuwsartikelen met een zoekterm.</Text>

      <TextInput
        style={styles.input}
        placeholder="..."
        value={query}
        onChangeText={setQuery}
        autoCapitalize="none"
      />

      <Pressable style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Zoek nieuws</Text>
      </Pressable>

      {!!errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

      {isLoading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color="#1F7A8C" />
          <Text style={styles.loadingText}>Nieuws laden...</Text>
        </View>
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => `${item.url}-${index}`}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {item.urlToImage ? (
                <Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
              ) : null}

              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>
                {item.description || 'Geen beschrijving beschikbaar.'}
              </Text>
              <Text style={styles.cardMeta}>
                {item.source.name} - {new Date(item.publishedAt).toLocaleDateString()}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              {hasResults
                ? ''
                : 'Nog geen resultaten. Voer een zoekterm in en druk op zoek nieuws.'}
            </Text>
          }
        />
      )}

      <View style={styles.navButtonsRow}>
        <Pressable
          style={styles.navButton}
          onPress={() => navigation.navigate('Instellingen')}>
          <Text style={styles.navButtonText}>Instellingen</Text>
        </Pressable>
        <Pressable style={styles.navButton} onPress={() => navigation.navigate('Profiel')}>
          <Text style={styles.navButtonText}>Profiel</Text>
        </Pressable>
      </View>
    </View>
  );
}
