import React from "react";
import * as Styles from "../Styles";
import { ButtonProps, Pressable, Text, StyleSheet } from "react-native";

// Constant Button-specific Styles
const BUTTON_HEIGHT = 3;
const BUTTON_WIDTH = 25;

enum BorderType {
  BUTTON_BORDER_RADIUS_ROUNDED = 14,
  BUTTON_BORDER_RADIUS_BLOCK = 7,
}

interface CustomButtonProps {
  overriddenStyles?: any;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  size?: Styles.Size;
  borderType?: BorderType;
  borderWidth?: number;
}
const Button = ({
  // set default values for props
  text = "",
  backgroundColor = Styles.Colors.Black,
  textColor = "#ffffff",
  size = Styles.Size.Medium,
  overriddenStyles = {},
  borderType = BorderType.BUTTON_BORDER_RADIUS_BLOCK,
}: CustomButtonProps) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor,
      height: BUTTON_HEIGHT * size + "%",
      width: BUTTON_WIDTH * size + "%",
      borderRadius: borderType * size,
      borderWidth: 0,
      justifyContent: "center",
    },
    text: {
      color: textColor,
      fontSize: Styles.FONT_SIZE * size,
      textAlign: "center",
      fontFamily: "NunitoSans_600SemiBold",
    },
  });
  if ("height" in overriddenStyles) {
    styles.button.height = overriddenStyles.height;
  }
  if ("width" in overriddenStyles) {
    styles.button.width = overriddenStyles.width;
  }
  return (
    <Pressable style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};
export default Button;

// Sample usage:
// <Button text="hello" size={Styles.Size.Medium} backgroundColor={Styles.Colors.LightGray}></Button>
