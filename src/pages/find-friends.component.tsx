import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';
import InputBox from '../components/InputBox.component';
import PasswordInputBox from '../components/PasswordInputBox.component';

export default function HomePage() {
  return (
    <View>
      <InputBox label='email' />
      <PasswordInputBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#023237',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#FFC65C',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    textShadowColor: '#998440',
  },
  input: {
    backgroundColor: '#89C1D2',
    placeholderTextColor: '#000',
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderRadius: 27,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#107E7B',
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 10,
    width: '75%',
  },
  text: {
    color: '#FFF',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
