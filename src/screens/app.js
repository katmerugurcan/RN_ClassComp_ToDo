import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/header'
import Bottom from '../components/bottom'
import TaskList from '../components/task_list'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
        this.backgroundImage = this.props.route.params.image
        this.state = {
            text: "",
            id: Number
        }
    }
    componentDidMount() { }
    componentDidUpdate() {
        // console.log(this.state, "app.js")
    }

    render() {
        const setText = (value) => this.setState({ text: value })
        const setID = (id) => { this.setState({ id: id }) }
        // const deleteTask = (index) => {this.setState({}) }
        return (
            <ImageBackground
                source={{ uri: this.backgroundImage }}
                resizeMode='cover'
                style={styles.background}
            >
                <SafeAreaView style={styles.background}>
                    <Header title="ToDo" />
                    <TaskList taskData={this.state} />
                    <Bottom setData={setText} setID={setID} />
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