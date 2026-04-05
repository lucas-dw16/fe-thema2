import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import type { RootStackParamList } from '@/src/navigation/StackNavigator';
import { searchNews, type NewsArticle } from '@/src/services/newsApi';
import { styles } from '@/src/screens/styles/HomeScreen.styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

type Task = {
  id: string;
  title: string;
  subject: string;
  done: boolean;
};

type TaskFilter = 'all' | 'open' | 'done';

const TASK_STORAGE_KEY = '@school_planner_tasks';

export function HomeScreen({ navigation }: Props) {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [taskSubject, setTaskSubject] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskFilter, setTaskFilter] = useState<TaskFilter>('all');
  const [taskErrorMessage, setTaskErrorMessage] = useState('');
  const [isTasksLoaded, setIsTasksLoaded] = useState(false);

  const hasResults = useMemo(() => articles.length > 0, [articles]);
  const filteredTasks = useMemo(() => {
    if (taskFilter === 'open') {
      return tasks.filter((task) => !task.done);
    }

    if (taskFilter === 'done') {
      return tasks.filter((task) => task.done);
    }

    return tasks;
  }, [taskFilter, tasks]);

  useEffect(() => {
    async function loadTasks() {
      try {
        const savedTasks = await AsyncStorage.getItem(TASK_STORAGE_KEY);

        if (!savedTasks) {
          return;
        }

        const parsedTasks = JSON.parse(savedTasks) as Task[];
        setTasks(parsedTasks);
      } catch {
        setTaskErrorMessage('Taken laden is mislukt.');
      } finally {
        setIsTasksLoaded(true);
      }
    }

    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      try {
        await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
      } catch {
        setTaskErrorMessage('Taken opslaan is mislukt.');
      }
    }

    if (isTasksLoaded) {
      saveTasks();
    }
  }, [isTasksLoaded, tasks]);

  function handleAddTask() {
    const trimmedTitle = taskTitle.trim();
    const trimmedSubject = taskSubject.trim();

    if (!trimmedTitle || !trimmedSubject) {
      setTaskErrorMessage('Vul taak en vak in.');
      return;
    }

    const newTask: Task = {
      id: `${Date.now()}`,
      title: trimmedTitle,
      subject: trimmedSubject,
      done: false,
    };

    setTasks((previousTasks) => [newTask, ...previousTasks]);
    setTaskTitle('');
    setTaskSubject('');
    setTaskErrorMessage('');
  }

  function toggleTaskDone(id: string) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handleDeleteTask(id: string) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>School Planner</Text>
        <Text style={styles.subtitle}>Voeg taken toe, vink ze af en zoek nieuws.</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mijn taken</Text>

          <TextInput
            style={styles.input}
            placeholder="Taak, bv. Huiswerk hoofdstuk 3"
            placeholderTextColor="#7E8DA1"
            value={taskTitle}
            onChangeText={setTaskTitle}
          />

          <TextInput
            style={styles.input}
            placeholder="Vak, bv. Wiskunde"
            placeholderTextColor="#7E8DA1"
            value={taskSubject}
            onChangeText={setTaskSubject}
          />

          <Pressable style={styles.addTaskButton} onPress={handleAddTask}>
            <Text style={styles.searchButtonText}>Taak toevoegen</Text>
          </Pressable>

          {!!taskErrorMessage && (
            <Text style={styles.errorText}>{taskErrorMessage}</Text>
          )}

          <View style={styles.filterRow}>
            <Pressable
              style={[
                styles.filterButton,
                taskFilter === 'all' && styles.filterButtonActive,
              ]}
              onPress={() => setTaskFilter('all')}>
              <Text
                style={[
                  styles.filterButtonText,
                  taskFilter === 'all' && styles.filterButtonTextActive,
                ]}>
                Alles
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.filterButton,
                taskFilter === 'open' && styles.filterButtonActive,
              ]}
              onPress={() => setTaskFilter('open')}>
              <Text
                style={[
                  styles.filterButtonText,
                  taskFilter === 'open' && styles.filterButtonTextActive,
                ]}>
                Open
              </Text>
            </Pressable>
            <Pressable
              style={[
                styles.filterButton,
                taskFilter === 'done' && styles.filterButtonActive,
              ]}
              onPress={() => setTaskFilter('done')}>
              <Text
                style={[
                  styles.filterButtonText,
                  taskFilter === 'done' && styles.filterButtonTextActive,
                ]}>
                Klaar
              </Text>
            </Pressable>
          </View>

          {filteredTasks.length === 0 ? (
            <Text style={styles.emptyText}>Nog geen taken in deze filter.</Text>
          ) : (
            filteredTasks.map((task) => (
              <Pressable
                key={task.id}
                style={styles.taskCard}
                onPress={() => toggleTaskDone(task.id)}>
                <View style={styles.taskCheckBox}>
                  <View
                    style={[
                      styles.taskCheckDot,
                      task.done && styles.taskCheckDotDone,
                    ]}
                  />
                </View>
                <View style={styles.taskTextBlock}>
                  <Text
                    style={[
                      styles.taskTitle,
                      task.done && styles.taskTitleDone,
                    ]}>
                    {task.title}
                  </Text>
                  <Text style={styles.taskSubject}>{task.subject}</Text>
                </View>

                {taskFilter === 'all' ? (
                  <Pressable
                    style={styles.deleteTaskButton}
                    onPress={() => handleDeleteTask(task.id)}>
                    <Text style={styles.deleteTaskButtonText}>Verwijder</Text>
                  </Pressable>
                ) : null}
              </Pressable>
            ))
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Nieuwszoekmachine</Text>

          <TextInput
            style={styles.input}
            placeholder="Zoekterm, bv. technologie"
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
          ) : hasResults ? (
            <View style={styles.listContent}>
              {articles.map((item, index) => (
                <View key={`${item.url}-${index}`} style={styles.card}>
                  {item.urlToImage ? (
                    <Image source={{ uri: item.urlToImage }} style={styles.cardImage} />
                  ) : null}

                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>
                    {item.description || 'Geen beschrijving beschikbaar.'}
                  </Text>
                  <Text style={styles.cardMeta}>
                    {item.source.name} -{' '}
                    {new Date(item.publishedAt).toLocaleDateString()}
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>
              Nog geen resultaten. Voer een zoekterm in en druk op zoek nieuws.
            </Text>
          )}
        </View>
      </ScrollView>

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
