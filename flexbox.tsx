import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Atas */}
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Bagian Tengah */}
      <View style={styles.middleContainer}>
        <Image
          source={require('./assets/unklab.png')} // ganti sesuai lokasi logo kamu
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Universitas Klabat</Text>
        <Text style={styles.subtitle}>Pathway to Excellence</Text>
      </View>

      {/* Bagian Bawah */}
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Bagian atas
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'red',
    paddingVertical: 20,
  },

  // Bagian tengah
  middleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontStyle: 'italic',
  },

  // Bagian bawah
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'blue',
    paddingVertical: 20,
  },

  // Kotak
  blackBox: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
  },
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
});
