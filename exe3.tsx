import React from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Foto Profil */}
        <Image
          source={{ uri: 'https://placekitten.com/200/200' }} // Ganti dengan foto asli
          style={styles.profileImage}
        />
        <Text style={styles.name}>Yorry Efrem</Text>
        <Text style={styles.title}>Web & Mobile Developer</Text>

        {/* Tentang Saya */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tentang Saya</Text>
          <Text style={styles.text}>
            Saya seorang developer yang berfokus pada pengembangan web dan mobile apps
            dengan React, React Native, dan teknologi modern lainnya.
          </Text>
        </View>

        {/* Pendidikan */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pendidikan</Text>
          <Text style={styles.text}>S1 - Teknik Informatika, Universitas Klabat (2021 - Sekarang)</Text>
        </View>

        {/* Pengalaman */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pengalaman</Text>
          <Text style={styles.text}>- Freelance Web Developer (2023 - Sekarang)</Text>
          <Text style={styles.text}>- Magang di PT ABC sebagai Frontend Dev (2022)</Text>
        </View>

        {/* Skill */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skill</Text>
          <Text style={styles.text}>- React, React Native, TypeScript</Text>
          <Text style={styles.text}>- Node.js, Express, MongoDB</Text>
          <Text style={styles.text}>- UI/UX Design (Figma, TailwindCSS)</Text>
        </View>

        {/* Kontak */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kontak</Text>
          <Text style={styles.text}>📧 yorry@gmail.com</Text>
          <Text style={styles.text}>📱 +62 812 3456 7890</Text>
          <Text style={styles.text}>🌐 github.com/yorry</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  scroll: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});
