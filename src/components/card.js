import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { DataContext } from '../assets/provider'

export default class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPressed: false,
        }
    }
    componentDidMount() { console.log(this.props.id, "cdm") }
    static contextType = DataContext
    render() {
        const { dropTask } = this.context

        const createTwoButtonAlert = (textID, text) => {
            Alert.alert(
                "Bu not silinsin mi?",
                `"${text}" id: ${textID}`,
                [
                    {
                        text: "Cancel",
                        onPress: () => null,
                        style: "cancel"
                    },
                    {
                        text: "OK",
                        onPress: () => dropTask(textID)
                    }
                ]
            )
        }

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
                        createTwoButtonAlert(this.props.id, this.props.text)
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
        width: '70%',
        minHeight: 50,
        maxHeight: 150,
        borderRadius: 12,
        elevation: 8,
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    pressed: {
        flexDirection: 'row',
        margin: 10,
        minHeight: 50,
        width: '70%',
        borderRadius: 12,
        elevation: 8,
        backgroundColor: 'white',
        alignSelf: 'center',
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