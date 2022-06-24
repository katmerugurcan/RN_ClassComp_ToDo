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

    render() {
        const setQuery = (value) => { this.setState({ query: value }) }

        // const checkID = (id) => {
        //     let DIDS = this.props.dids

        //     DIDS != [] &&
        //         DIDS.map((e) => {
        //             return id === e &&
        //                 false
        //         })
        //     return true
        // }

        const generateID = () => {
            let newID = this.state.id
            // while (checkID(newID))
            this.setState({ id: newID + 1 })
            return newID
        }

        const submitQuery = () => {
            if (this.state.query) {
                this.props.setData(generateID(), this.state.query)

                console.log("submit")
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