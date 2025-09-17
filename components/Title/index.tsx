import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({children}: {children: React.ReactNode}) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});

export default Title;