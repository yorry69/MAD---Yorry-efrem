import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';

const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Welcome</Title>
      <TextInput placeholder="Masukan username anda" label="Username" />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />
      <Button label="Sign In" color="orange" colorText="white" />
      <Button label="Sign in Google" color="red" colorText="white" />
      <Button label="Sign in Facebook" color="blue" colorText="white" />
      <Button label="Sign in Apple" color="black" colorText="white" />
      <Button label="Create New Account" color="gray" colorText="white" />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});