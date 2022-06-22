import { Text, StyleSheet, View, TextInput } from 'react-native'
import React, { Component } from 'react'
import Button from './_button'

export default class Bottom extends Component {
    constructor() {
        super()
        this.state = {
            query: "",
            id: 0
        }
    }
    componentDidUpdate() {
        console.log(this.state.query)
    }

    render() {
        const setQuery = (value) => { this.setState({ query: value }) }
        const generateID = () => {
            this.setState({ id: this.state.id + 1 })
            return this.state.id
        }

        const submitQuery = () => {
            this.state.query &&
                this.props.setID(generateID())
            if (this.state.query) {
                this.props.setData(this.state.query)
            }
            setQuery("")
        }

        return (
            <View style={styles.bottom_container}>
                <TextInput
                    style={styles.input}
                    placeholder='Enter Task'
                    onSubmitEditing={() => submitQuery()}
                    value={this.state.query}
                    onChangeText={(value) => setQuery(value)}
                />
                <Button onPressEvnt={submitQuery} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottom_container: {
        // flex: 0.12,
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