import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import Button from './_button'
import { DataContext } from '../assets/provider'

export default class Bottom extends Component {
    constructor() {
        super()
        this.state = {
            taskQuery: ""
        }
    }
    setTaskQuery = (value) => { this.setState({ taskQuery: value }) }
    static contextType = DataContext
    render() {
        const { data, setData } = this.context

        const submitData = () => {
            this.state.taskQuery
                && setData(generateID(), this.state.taskQuery)
            this.setTaskQuery("")
        }

        const generateID = () => {
            let id = 0
            data.map((e) => {
                while (id === e.taskID) {
                    id += 1
                }
            })
            return id
        }

        return (
            <View style={styles.bottom_container}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Task'
                    onSubmitEditing={() => submitData()}
                    value={this.state.taskQuery}
                    onChangeText={(value) => this.setTaskQuery(value)}
                />
                <Button />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottom_container: {
        color: 'orange',
        minHeight: 55,
        width: '90%',
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    input: {
        width: '70%',
        marginLeft: 20
    },
})