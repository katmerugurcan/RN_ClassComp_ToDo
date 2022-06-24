import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Card extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text_style}>{this.state.text}</Text>
                <TouchableOpacity
                    style={styles.delete}
                    onPress={() => {
                        null
                    }}
                >
                    <Ionicons name='trash-outline' size={28} color='black' />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        width: 380,
        minHeight: 50,
        maxHeight: 150,
        borderRadius: 12,
        elevation: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text_style: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    delete: {
        marginRight: 10
    }
})