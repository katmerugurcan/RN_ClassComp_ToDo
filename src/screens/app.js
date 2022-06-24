import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/header'
import TaskList from '../components/task_list'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.backgroundImage = this.props.route.params.image
    }

    render() {
        return (
            <ImageBackground
                source={{ uri: this.backgroundImage }}
                resizeMode='cover'
                style={styles.background}
            >
                <SafeAreaView style={styles.background}>
                    <Header title="ToDo" />
                    <TaskList />
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})