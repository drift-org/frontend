import React from "react";
// import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
}
const Button = ({ text, backgroundColor = "#000000" }: ButtonProps) => {
  const styles = {
    color: backgroundColor,
  };
  return <button style={styles}>{text}</button>;
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#023237",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     color: "#FFC65C",
//     fontSize: 150,
//     fontStyle: "italic",
//     fontWeight: "bold",
//     textShadowOffset: { width: 5, height: 5 },
//     textShadowRadius: 10,
//     textShadowColor: "#998440",
//   },
//   subtitle: {
//     color: "#FFFFFF",
//     fontSize: 25,
//     fontStyle: "italic",
//     fontWeight: "bold",
//     marginTop: "50%",
//   },
//   button: {
//     backgroundColor: "#89C1D2",
//     borderRadius: 50,
//     paddingHorizontal: 50,
//     paddingVertical: 10,
//     marginVertical: 10,
//     width: "75%",
//   },
//   text: {
//     color: "#000",
//     fontSize: 50,
//     fontStyle: "italic",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
