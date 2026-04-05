# School Planner

Een eenvoudige app om schooltaken, toetsen en deadlines overzichtelijk bij te houden.

## 1. App-idee

School Planner is een handige planner voor iedereen die op school zit.
Je voegt taken toe per vak, zet er een deadline op en vinkt ze af zodra je klaar bent.
Zo zie je in een keer wat nog moet gebeuren en wat al af is.

Waarom dit een logisch idee is:

1. Veel scholieren en studenten verliezen snel het overzicht.
2. Het probleem is herkenbaar en realistisch.
3. De app is technisch haalbaar voor een eerste project.

## 2. Doelgroep

1. Iedereen die op school zit
2. Van middelbaar onderwijs tot hoger onderwijs
3. Vooral mensen die meer overzicht willen in hun planning

## 3. Hoofddoel van de app

Gebruikers helpen om hun schoolwerk beter te plannen, zodat ze minder stress hebben.

## 4. Basisfuncties (eerste versie)

1. Taak toevoegen met titel, vak en deadline
2. Overzicht van alle taken
3. Filter op vak (bijvoorbeeld Nederlands, Engels, Rekenen/Wiskunde)
4. Taak markeren als voltooid
5. Simpel dashboard met:
   - aantal open taken
   - aantal voltooide taken

## 5. Technologie

1. React Native met Expo
2. React Navigation (Drawer + Bottom Tabs + Stack)
3. TypeScript
4. Axios voor API-calls
5. NewsAPI voor nieuwsartikelen
6. AsyncStorage voor lokaal bewaren van taken

## 6. Ontwikkelingsfase

### Fase 1: Voorbereiding

1. README en projectplan opstellen
2. Schermen bepalen: Home, Instellingen, Profiel

### Fase 2: Basisfunctionaliteit

1. Drawer Navigation opzetten
2. Home-scherm bouwen
3. Instellingen-scherm bouwen
4. Profiel-scherm bouwen

### Fase 3: Verbetering

1. Filter op vak toevoegen
2. Dashboard met simpele statistieken
3. Layout verbeteren voor mobiel

## 7. Voortgangsupdates

### Opdracht 1: App-idee

Resultaat:

1. Project gekozen: School Planner
2. Doel bepaald: Scholieren helpen hun schoolwerk beter in te plannen
3. Basisfuncties vastgesteld: Taaktoevoeging, dashboard, filters op vak
4. Doelgroep gedefinieerd: Middelbar onderwijs tot hoger onderwijs

### Opdracht 2: React Navigation Drawer

Resultaat:

1. Drawer Navigation werkt met React Navigation
2. Drie schermen zijn aanwezig: Home, Instellingen, Profiel
3. Elk scherm heeft een eigen StyleSheet-bestand

### Opdracht 3: React Navigation Bottom

Resultaat:

1. Bottom Navigation werkt met React Navigation
2. Drie schermen zijn aanwezig: Home, Instellingen, Profiel
3. Elk scherm gebruikt een aparte StyleSheet-file

Wat is aangepast:

1. App start nu met een Bottom Tab Navigator
2. Home, Instellingen en Profiel zijn als tabs gekoppeld
3. Navigatiebalk staat onderaan de app

### Opdracht 4: React Navigation Stack

Resultaat:

1. Stack Navigation werkt met React Navigation
2. Drie schermen zijn aanwezig: Home, Instellingen, Profiel
3. Elk scherm gebruikt een aparte StyleSheet file

Wat is aangepast:

1. App start nu met een Native Stack Navigator
2. Schermen zijn stapelbaar en navigeerbaar met terug knop
3. Headers hebben juiste styling met back button

### Opdracht 5: Nieuwszoekmachine API

Resultaat:

1. Gebruiker kan een zoekterm invullen in TextInput
2. Met de zoekknop wordt nieuws opgehaald via api
3. Resultaten worden getoond in een flatlist
4. Elk item laat zien: titel, beschrijving, afbeelding en publicatiedatum

Wat is aangepast:

1. Home-scherm omgebouwd naar nieuwszoekmachine
2. Axios toegevoegd voor newsapi 
3. Private api-config in een apart bestand

### Opdracht 8: Volgende functionaliteit

Resultaat:

1. Gebruiker kan taken toevoegen met taak + vak
2. Gebruiker kan taken afvinken als klaar
3. Gebruiker kan filteren op Alles, Open en Klaar
4. Taken blijven bewaard op het toestel met AsyncStorage

Wat is aangepast:

1. Home-scherm uitgebreid met takenplanner
2. AsyncStorage toegevoegd voor lokale opslag
3. Filterknoppen toegevoegd voor snelle weergave van taken

### Update 2026-03-31

1. App-idee gekozen
2. Doelgroep en hoofddoel vastgelegd
3. Eerste versie van project-README uitgewerkt
4. React Navigation Drawer gemaakt met 3 schermen: Home, Instellingen, Profiel
5. Styling opgesplitst in aparte files
6. React Navigation Bottom gemaakt met 3 tabs: Home, Instellingen, Profiel
7. React Navigation Stack gemaakt met 3 schermen
8. Nieuwszoekmachine met NewsAPI gebouwd op het Home-scherm
9. Stack Navigation gekozen

### Update 2026-04-06

1. Opdracht 8 gebouwd: takenplanner op Home-scherm
2. Taken opslaan met AsyncStorage toegevoegd
3. Filter op Alles/Open/Klaar toegevoegd
4. README bijgewerkt met uitleg van de nieuwe feature

Volgende stap:

1. Screenshots van Opdracht 6 toevoegen (home, zoeken, instellingen, profiel)
2. Reflectie-secties aanvullen op het einde van de opdracht

## 8. Logboek (wat en waarom)

| Datum | Wat gedaan | Waarom |
| --- | --- | --- |
| 2026-03-31 | Nieuwe README gemaakt met volledig projectvoorstel | Nodig voor de opdracht |
| 2026-03-31 | Drawer Navigation toegevoegd met Home, Instellingen en Profiel | Voldoen aan opdracht 2 (React Navigation Drawer) |
| 2026-03-31 | Styles opgesplitst naar aparte files per scherm en drawer-thema | Betere code-structuur en duidelijkheid |
| 2026-03-31 | Bottom Navigation toegevoegd met Home, Instellingen en Profiel | Voldoen aan opdracht 3 (React Navigation Bottom) |
| 2026-03-31 | Stack Navigation toegevoegd met Home, Instellingen en Profiel | Voldoen aan opdracht 4 (React Navigation Stack) |
| 2026-03-31 | NewsAPI zoekfunctie toegevoegd met axios en flatlistt | Voldoen aan opdracht 5 (Nieuwszoekmachine API) |
| 2026-03-31 | Stack Navigation gekozen | Voldoen aan opdracht 6 (Navigatie-keuze) |
| 2026-04-06 | Takenplanner toegevoegd met lokaal opslaan en filters | Voldoen aan opdracht 8 (Volgende functionaliteit) |




## 9. Problemen en uitdagingen

Wordt aangevuld tijdens de bouw van de app.

Voorlopig:

1. Tunnel (ngrok) werkte niet goed
2. Oplossing: app draaien via LAN met npx expo start --host lan -c

## 10. Screenshots en video

Screenshots van de huidige versie:

Opdracht 2: React Navigation Drawer

1. Home-scherm: ![Home scherm](image.png)
2. Instellingen-scherm: ![Instellingen scherm](image-1.png)
3. Profiel-scherm: ![Profiel scherm](image-2.png)
4. Korte video: <video controls src="20260331-1911-21.6484080.mp4" title="Title"></video>


Opdracht 3: React Navigation Bottom

1. Home-scherm: ![alt text](image-4.png)
2. Instellingen-scherm: ![alt text](image-5.png)
3. Profiel-scherm: ![alt text](image-3.png)
4. Korte video: <video controls src="20260331-1917-57.5061422.mp4" title="Title"></video>

Opdracht 4: React Navigation Stack

1. Home-scherm: ![alt text](image.png)
2. Instellingen-scherm: ![alt text](image-1.png)
3. Profiel-scherm: ![alt text](image-2.png)
4. Korte video: <video controls src="20260331-1932-58.0011514.mp4" title="Title"></video>


Opdracht 5: Nieuwszoekmachine API

1. Home-scherm (zoekfunctie + resultaten): ![alt text](image.png)  |  ![alt text](image-1.png)

2. Instellingen-scherm: ![alt text](image-2.png)
3. Profiel-scherm:![alt text](image-3.png)
4. Korte video: <video controls src="20260331-2003-33.0394093.mp4" title="Title"></video>


Opdracht 6: Navigatie

**Gekozen navigatie: Stack Navigation**

De app gebruikt **Stack Navigation**. Je schermen worden op elkaar gestapeld, zoals een stapel papier. Dit is goed voor deze app omdat:

1. **Je kan teruggaan**: Je gaat stap voor stap van Zoeken -> Resultaten _> Instellingen ->> Terug
2. **Terug-knop**: Met een  terug knop kom je makkelijk terug waar je vandaan kwam
3. **Logische volgorde**: Een scherm na het ander op een makkelijke manier
4. **Elk scherm zijn eigen titel**: Elk scherm ziet er anders uit

**Hoe het werkt:**

- `StackNavigator.tsx`: Bepaalt welke schermen er zijn
- `stackTheme.ts`: Bepaalt hoe alles eruit ziet
- Knoppen: Je kan van scherm naar scherm navigeren

**Waarom niet anders:**

- **Drawer menu**: Beter voor veel menu-opties aan de zijkant
- **Bottom tabs**: Beter voor schermen die even belangrijk zijn

Screenshots:

1. Home-scherm: ![alt text](image.png)
2. Zoekresultaten: ![alt text](image-1.png)
3. Instellingen-scherm: ![alt text](image-2.png)
4. Profiel-scherm:![alt text](image-3.png)
5. Demo video: <video controls src="20260331-2026-29.6592982.mp4" title="Title"></video>

Opdracht 8: Volgende functionaliteit

1. Taken toevoegen op Home: ![alt text](image.png)
2. Filter Alles/Open/Klaar: alles: ![alt text](image-1.png) 
 open: ![alt text](image-2.png)
 klaar: ![alt text](image-3.png)
3. Taken afvinken als klaar: ![alt text](image-4.png)
4. Korte video: <video controls src="20260405-2352-48.1830421.mp4" title="Title"></video>





## 11. Reflectie en leerpunten

Wordt op het einde van de projectperiode ingevuld.

Te reflecteren op:

1. Wat ging goed in planning en uitvoering
2. Wat moeilijk was en hoe dat is opgelost
3. Wat ik de volgende keer anders zou doen

**Specifieke punten per opdracht:**

- **Opdracht 6 (Navigatie)**: Was Stack Navigation het juiste keuze? Waarom wel/niet? Hoe ervaart de gebruiker de navigatie?

## 12. Installatie en gebruik

### Vereisten

1. Node.js (LTS)
2. npm
3. Expo Go (optioneel)

### Installatie

```bash
npm install
```

Dependency voor de takenplanner:

```bash
npm install @react-native-async-storage/async-storage
```

### App starten

```bash
npx expo start --host lan -c
```

Daarna in de terminal:

1. Druk op w voor web
2. Druk op a voor Android
3. Scan QR-code met Expo Go op je smartphone

## 13. GitHub en inleveren

Dit project wordt gehost op GitHub.

Repository:

https://github.com/lucas-dw16/fe-thema2

In te dienen:

1. Link naar de repository: https://github.com/lucas-dw16/fe-thema2
2. Bijgewerkte README met voortgang, logboek en reflectie


