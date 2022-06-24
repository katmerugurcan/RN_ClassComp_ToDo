import { Text, View } from 'react-native'
import React, { Component, createContext } from 'react'

export const DataContext = createContext()

export default class DataProvider extends Component {
    state = {
        data: []
    }
    componentDidUpdate() {
        console.log(this.state.data)
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

    render() {
        const { children } = this.props
        const { data } = this.state
        const { setData } = this

        const _values = {
            data,
            setData,
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