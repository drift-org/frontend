import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const SignUp:React.FC= () => {
  const [name, changeName] = useState('')
  const [username, changeUsername] = useState('')
  const [password, changePassword] = useState('')
  const [email, changeEmail] = useState('')
  const [univeristy, changeUniversity] = useState('')
  const onSubmit = () => {
    console.log('enter')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up and Make Your Own Adventures!</Text>
      <Text style={styles.text}>Full Name</Text>
      <TextInput style={styles.inputBox} value={name} onChangeText={changeName}/>
      <Text style={styles.text}>Username</Text>
      <TextInput style={styles.inputBox} value={username} onChangeText={changeUsername}/>
      <Text style={styles.text}>Password</Text>
      <TextInput style={styles.inputBox} value={password} onChangeText={changePassword}/>
      <Text style={styles.text}>Email</Text>
      <TextInput style={styles.inputBox} value={email} onChangeText={changeEmail}/>
      <Text style={styles.text}>University</Text>
      <TextInput style={styles.inputBox} value={univeristy} onChangeText={changeUniversity}/>
      <Button title='submit' onPress={onSubmit}/>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    color: "white",
    paddingTop: "50px"
  },
  text: {
    color: "white",
    paddingTop: '20px'
  },
  inputBox: {
    backgroundColor: "white"
  }

});
export default SignUp