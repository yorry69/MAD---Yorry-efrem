import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface Props {
  label: string;
  color?: string;
  colorText?: string;
  onPress?: () => void;
}

const Button = ({
  label,
  color = '#007bff',
  colorText = '#fff',
  onPress,
}: Props) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: color}]}
    onPress={onPress}>
    <Text style={[styles.text, {color: colorText}]}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;