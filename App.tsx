
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Signup from './components/auth/signup.component'
import TempHome from './components/general/temphome.component'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return ( 
    <Router> 
      <View style={styles.appcontainer}>
        <Route exact path='/' component={TempHome}/>
        <Route path='/signup' component={Signup}/>
      </View>
    </Router>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    height: '100%',
    width: '100%'

  },
});
