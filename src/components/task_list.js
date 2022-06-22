import { Text, View, StyleSheet, FlatList } from 'react-native'
import React, { Component } from 'react'
import Card from './card'

export default class task_list extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() { }
    componentDidUpdate() {
        console.log(this.state.data, "tasklist")
        this.props.taskData != this.state.data[this.state.data.length - 1] &&
            this.setState({ data: [...this.state.data, this.props.taskData] })

    }

    render() {
        // const deleteTask = (index) => {this.setState({}) }
        return (
            <FlatList
                style={styles.container}
                alignItems='center'
                data={this.state.data}
                renderItem={({ item }) => {
                    console.log(item, "flatlist")
                    return <Card text={item.text} cardID={item.id} />
                }}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
})