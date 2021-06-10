import React from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';

export const StartDrift = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>start a drift</Text>
      <Text style={styles.label}>travel radius</Text>
      <Text style={styles.label}>select a group</Text>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{'Start!'}</Text>
      </Pressable>
    </View>
  );
};

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
  button: {
    backgroundColor: '#107E7B',
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 10,
    width: '75%',
  },
  label: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
