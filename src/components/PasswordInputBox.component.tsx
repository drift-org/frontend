import React from 'react';
import { useState } from 'react';
import { TouchableHighlight, Image, StyleSheet } from 'react-native';
import InputBox, { InputBoxProps } from '../components/InputBox.component';

export default function PasswordInputBox(props: InputBoxProps) {
  const [showPassword, toggleShowPassword] = useState(false);

  const showIcon = (
    <Image
      style={styles.icon}
      source={require('../assets/eye-open-icon.svg')}
    />
  );

  const hideIcon = (
    <Image
      style={styles.icon}
      source={require('../assets/eye-closed-icon.svg')}
    />
  );

  return (
    <InputBox
      {...props}
      label='Password'
      secureTextEntry={!showPassword}
      icon={
        <TouchableHighlight
          onPress={() => {
            toggleShowPassword(!showPassword);
          }}
        >
          {showPassword ? showIcon : hideIcon}
        </TouchableHighlight>
      }
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 18,
    tintColor: '#AEAEB2',
  },
});
