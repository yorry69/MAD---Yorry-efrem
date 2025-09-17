import React from 'react';
import {
  View,
  Text,
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

const TextInput = ({label, ...props}: Props) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <RNTextInput style={styles.input} {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
});

export default TextInput;