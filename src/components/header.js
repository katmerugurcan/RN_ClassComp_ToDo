import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { THEME_COLORS } from '../assets/storage'

export default class Header extends Component {
    componentDidUpdate() { console.log("header updated") }
    render() {
        return (
            // <LinearGradient style={styles.container} colors={THEME_COLORS} >
            //     <Text style={styles.title}>{this.props.title}</Text>
            // </LinearGradient>
            <ImageBackground
                style={styles.container}
                source={{ uri: 'https://wallpaperaccess.com/full/1399857.jpg' }}
                resizeMode='cover'
                width='100%'
                borderBottomRightRadius={26}
                borderBottomLeftRadius={26}
            >
                <Text style={styles.title}>{this.props.title}</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'white',
        elevation: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
})