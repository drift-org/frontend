import React from "react";
import * as Styles from "../Styles";
const BUTTON_HEIGHT = 3;
const BUTTON_WIDTH = 25;
enum BorderType {
  BUTTON_BORDER_RADIUS_ROUNDED = 14,
  BUTTON_BORDER_RADIUS_BLOCK = 7,
}
// import { Pressable, StyleSheet, Text, View } from "react-native";
interface ButtonProps {
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
  text,
  backgroundColor = Styles.Colors.Black,
  textColor = "#ffffff",
  size = Styles.Size.Medium,
  overriddenStyles = {},
  borderType = BorderType.BUTTON_BORDER_RADIUS_BLOCK,
}: ButtonProps) => {
  const styles = {
    background: backgroundColor,
    color: textColor,
    height: BUTTON_HEIGHT * size + "%",
    width: BUTTON_WIDTH * size + "%",
    borderRadius: borderType * size,
    borderWidth: 0,
    fontSize: Styles.FONT_SIZE * size,
  };
  if ("height" in overriddenStyles) {
    styles.height = overriddenStyles.height;
  }
  if ("width" in overriddenStyles) {
    styles.width = overriddenStyles.width;
  }
  return <button style={styles}>{text}</button>;
};
export default Button;
