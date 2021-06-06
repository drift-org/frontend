import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

const SignUp:React.FC= () => {
  const [name, changeName] = useState('')
  const [username, changeUsername] = useState('')
  const [password, changePassword] = useState('')
  const [email, changeEmail] = useState('')
  const [univeristy, changeUniversity] = useState('')
  const onSubmit = () => {
    /* 
    const tempObject = {
      name: name,
      username: username,
      password: password,
      email: email,
      univeristy: univeristy,
    }
    console.log(tempObject)
*/
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>make your own adventure</Text>
      <Text style={styles.subtitle}>Full Name</Text>
      <TextInput style={styles.inputBox} value={name} onChangeText={(data: string) => changeName(data)}/>
      <Text style={styles.subtitle}>Username</Text>
      <TextInput style={styles.inputBox} value={username} onChangeText={(data: string) => changeUsername(data)}/>
      <Text style={styles.subtitle}>Password</Text>
      <TextInput style={styles.inputBox} value={password} onChangeText={(data: string) => changePassword(data)}/>
      <Text style={styles.subtitle}>Email</Text>
      <TextInput style={styles.inputBox} value={email} onChangeText={(data: string) => changeEmail(data)}/>
      <Text style={styles.subtitle}>University</Text>
      <TextInput style={styles.inputBox} value={univeristy} onChangeText={(data: string) => changeUniversity(data)}/>
      <Pressable style={styles.button} onPress={onSubmit}><Text style={styles.buttonText}>Sign Up</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#023237",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFC65C",
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "bold",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    textShadowColor: "#998440",
    textAlign: "center",
    marginBottom: "2%",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: "5%",
  },
  inputBox: {
    backgroundColor: '#89C1D2',
    placeholderTextColor: '#000',
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderRadius: 27,
    paddingVertical: 5,
    marginVertical: 2,
    textAlign: 'center',
  },
 button: {
    backgroundColor: "#107E7B",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 30,
    width: "35%",
    textAlign: "center",

  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  }
});

/*

*/
  
  
export default SignUp