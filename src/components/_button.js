import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Button extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          null
        }}
      >
        <Ionicons name='send-sharp' size={32} color='#0088EB' />
      </TouchableOpacity >
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    width: '100%',
    height: '100%',
  },
})