import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DataContext } from '../assets/provider'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPressed: false,
            numberOfLines: 4
        }
    }
    componentDidMount() { console.log(this.props.id, "cdm") }
    static contextType = DataContext
    render() {
        const { dropTask } = this.context

        return (
            <TouchableOpacity
                style={
                    !this.state.isPressed
                        ? styles.container
                        : styles.pressed
                }
                onPress={() => {
                    this.setState({ isPressed: !this.state.isPressed })
                    console.log(this.state.isPressed)
                }}
            >
                <Text
                    style={styles.text_style_default}
                    numberOfLines={
                        !this.state.isPressed
                            ? 4
                            : 40
                    }
                >
                    {this.props.text}
                </Text>
                <TouchableOpacity
                    style={styles.delete}
                    onPress={() => {
                        dropTask(this.props.id)
                    }}
                >
                    <Ionicons name='trash-outline' size={28} color='black' />
                </TouchableOpacity>
            </TouchableOpacity>
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
    pressed: {
        flexDirection: 'row',
        margin: 10,
        width: 380,
        borderRadius: 12,
        elevation: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text_style_default: {
        marginVertical: 2,
        marginLeft: 10,
        fontSize: 18,
        maxWidth: '80%',
        fontWeight: 'bold',
    },
    delete: {
        marginRight: 10
    }
})