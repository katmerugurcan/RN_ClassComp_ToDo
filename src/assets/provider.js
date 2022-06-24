import { Text, View } from 'react-native'
import React, { Component, createContext } from 'react'

export const DataContext = createContext()

export default class DataProvider extends Component {
    state = {
        data: [],
    }

    setData = (id, task) => {
        this.setState({
            data: [
                ...this.state.data,
                {
                    taskID: id,
                    taskName: task
                }
            ]
        })
    }

    dropTask = (index) => {
        let d1 = []
        this.state.data.map((e) => {
            e.taskID != index
                && d1.push(e)
        })
        this.setState({ data: d1 })
    }

    render() {
        const { children } = this.props
        const { data } = this.state
        const { setData, dropTask } = this

        const _values = {
            data,
            setData,
            dropTask,
        }

        return (
            <DataContext.Provider
                value={_values}
            >
                {children}
            </DataContext.Provider>
        )
    }
}