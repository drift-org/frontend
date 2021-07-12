import React, { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TextInput,
  TextInputProps,
} from 'react-native';

export interface InputBoxProps extends TextInputProps {
  label?: string;
  icon?: ReactNode;
}

export default function InputBox(props: InputBoxProps) {
  return (
    <View style={styles.container}>
      {props.label ? <Text style={styles.label}>{props.label}</Text> : null}
      <View style={styles.innerContainer}>
        <TextInput {...props} style={styles.input} />
        {props.icon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#ACB8C2',
    width: 343,
    height: 60,
    borderWidth: 2,
    borderRadius: 14,
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'NunitoSans_600SemiBold',
    fontSize: 15,
    lineHeight: 24,
    textAlignVertical: 'top',
    color: '#AEAEB2',
  },
  input: {
    fontFamily: 'NunitoSans_600SemiBold',
    fontSize: 17,
    lineHeight: 23,
    width: '100%',
    textAlignVertical: 'top',
    color: '#2B2B2B',
  },
});
