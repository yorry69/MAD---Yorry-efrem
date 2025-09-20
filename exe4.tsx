import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// 🔹 Komponen InputField
const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

// 🔹 Komponen CustomButton
const CustomButton = ({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// 🔹 Main App
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      {/* Gunakan komponen InputField */}
      <InputField
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />

      <InputField
        label="Password"
        placeholder="Masukan password anda"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Gunakan komponen CustomButton */}
      <CustomButton title="Sign In" onPress={handleLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fdfdfd',
  },
  button: {
    backgroundColor: '#ff6600',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
