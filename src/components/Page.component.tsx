import React, { ReactNode } from 'react';
import { StyleSheet, Image, View, TextInput } from 'react-native';

export interface PageProps {
  blobs?: boolean;
  children: ReactNode;
}

export default function Page(props: PageProps) {
  const blobs = [
    <Image
      style={[styles.blob, styles.blob1]}
      key={1}
      source={require('../assets/background/blob1.svg')}
    />,
    <Image
      style={[styles.blob, styles.blob2]}
      key={2}
      source={require('../assets/background/blob2.svg')}
    />,
  ];

  return (
    <View style={styles.container}>
      {props.blobs && blobs}
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'white',
    position: 'absolute',
  },
  blob: {
    position: 'absolute',
    zIndex: -100,
  },
  blob1: {
    bottom: 0,
    left: 0,
    width: 375,
    height: 380,
  },
  blob2: {
    top: 0,
    right: 0,
    width: 268,
    height: 195,
  },
});
