import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            id: Number
        }
    }
    componentDidMount() {
        this.setText(this.props.text)
        this.setID(this.props.cardID)
        // console.log(this.state, "card")
    }
    setText = (text) => { this.setState({ text: text }) }
    setID = (id) => this.setState({ id: id })
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text_style}>{this.state.text}</Text>
                <TouchableOpacity
                    style={styles.delete}
                    onPress={() => {
                        // console.log(this.state.id)
                        this.props.deleteFunc(this.state.id)
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