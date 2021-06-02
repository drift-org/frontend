import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
//JUST TEMPLATE DOESNT WORK
export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>drift</Text>
      <Text style={styles.subtitle}>your next adventure waits</Text>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{"sign up"}</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.text}>{"login"}</Text>
      </Pressable>
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
    fontSize: 150,
    fontStyle: "italic",
    fontWeight: "bold",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 10,
    textShadowColor: "#998440",
  },
  subtitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: "50%",
  },
  button: {
    backgroundColor: "#89C1D2",
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 10,
    width: "75%",
  },
  text: {
    color: "#000",
    fontSize: 50,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
});
