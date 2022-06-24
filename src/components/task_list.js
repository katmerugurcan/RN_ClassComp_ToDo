import { Text, View, StyleSheet, FlatList } from 'react-native'
import React, { Component } from 'react'
import Card from './card'
import Bottom from './bottom'

export default class task_list extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            newData: [],
        }
    }
    componentDidMount() {
    }
    componentDidUpdate() {
        console.log(this.state.data, "updated")
    }


    render() {
        const setData = (taskID, query) => {
            this.setState({ data: [...this.state.data, { taskId: taskID, taskName: query }] })
        }

        const deleteTask = (index) => {
            console.log("setState")
            this.state.data.forEach(e => {
                if (e.taskId != index) this.state.newData.push(e)
            });

            this.state.data = this.state.newData
            // this.setState({ data: this.state.newData })
            this.state.newData = []
            this.setState({})
        }

        return (
            <View style={styles.body}>
                <FlatList
                    style={styles.container}
                    alignItems='center'
                    data={this.state.data}
                    renderItem={({ item }) => {
                        console.log(item.taskId, "listRender")
                        return (
                            <Card data={item} deleteFunc={deleteTask} />
                        )
                    }}
                />
                {/* <View /> */}
                <Bottom setData={setData} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    body: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})