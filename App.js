import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import HomeScreen from './src/screens/app'
import { BG_IMAGES } from './src/assets/storage'
import DataProvider from './src/assets/provider'

export default class App extends Component {
  render() {

    function Random(max) {
      return Math.floor(Math.random() * max)
    }

    const Stack = createNativeStackNavigator()

    return (
      <DataProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={() => ({ headerShown: false })} >
            <Stack.Screen
              name='Home'
              component={HomeScreen}
              // initialParams={{ image: BG_IMAGES[Random(BG_IMAGES.length)] }}
              initialParams={{ image: BG_IMAGES[2] }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    )
  }
}

const styles = StyleSheet.create({})