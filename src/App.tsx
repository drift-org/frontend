import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FindFriends from './pages/find-friends.component';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { registerRootComponent } from 'expo';
import { useFonts } from '@expo-google-fonts/nunito-sans';
import * as NunitoSans from '@expo-google-fonts/nunito-sans';
const Stack = createStackNavigator();

function App() {
  useFonts(NunitoSans);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='FindFriends'
          component={FindFriends}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
