import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

//We can use as a link page to make it easy to get between pages
//once a home is created just put this in a different route
const tempHome: React.FC = () => {
    return (
        <View style={styles.tempHomeLinks}>
            <Text>Signup: /signup</Text>
        </View>
    )
}
export default tempHome

const styles = StyleSheet.create({
  tempHomeLinks: {
      flex: 1, 
      alignItems: 'center',
      paddingTop: '50px'
  },
});