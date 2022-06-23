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
        // console.log(this.state.data, "tasklist")
        this.props.taskData != this.state.data[this.state.data.length - 1] &&
            this.setState({ data: [...this.state.data, this.props.taskData] })

    }

    render() {
        const setData = (i) => {
            this.setState({ data: deleteTask(i) })
            console.log(this.state.data)
        }

        const deleteTask = (index) => {
            let DATA = this.state.data
            let newData = []

            if (index === DATA.length - 1) {
                newData = DATA.pop()
            }
            else if (DATA.length > 0) {
                this.state.data.forEach(e => {
                    if (e.id != index) newData.push(e)
                });
            }
            else if (DATA.length === 0) {
                newData = []
            }
            return newData
        }

        return (
            <FlatList
                style={styles.container}
                alignItems='center'
                data={this.state.data}
                renderItem={({ item }) => {
                    // console.log(item, "flatlist")
                    return (
                        this.state.data.length != 0 &&
                        <Card text={item.text} cardID={item.id} deleteFunc={setData} />
                    )
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