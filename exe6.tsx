import React, {useState} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import Title from './components/Title/index';
import TextInput from './components/TextInput/index';
import Button from './components/Button/index';

const Exercise6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');

  const onSubmit = () => {
    console.log(
      '\nName: ' +
        name +
        '\nUsername: ' +
        username +
        '\nPassword: ' +
        password +
        '\nEmail: ' +
        email +
        '\nAddress: ' +
        address +
        '\nPhone Number: ' +
        phonenumber,
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title>Registration</Title>
      <TextInput
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        label="Email"
        placeholder="Masukan email anda"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        placeholder="Masukan password anda"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={setAddress}
        value={address}
      />
      <TextInput
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        onChangeText={e => setPhoneNumber(e.replace(/[^0-9]/g, ''))}
        value={phonenumber}
        keyboardType="phone-pad"
      />
      <Button
        label="Register"
        color="#C43DE9"
        colorText="#fff"
        onPress={onSubmit}
      />
    </ScrollView>
  );
};

export default Exercise6;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
    alignItems: 'stretch',
  },
});