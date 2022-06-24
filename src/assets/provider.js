import { Text, View } from 'react-native'
import React, { Component, createContext } from 'react'

export const DataContext = createContext()

export default class DataProvider extends Component {
    state = {
        data: []
    }

    setData = (value) => { this.setState({ data: value }) }

    render() {
        const { children } = this.props
        const { data } = this.state
        const { setData } = this

        const _values = {
            data,
            setData
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