import { Text, View, StyleSheet, FlatList } from 'react-native'
import React, { Component } from 'react'
import Card from './card'
import Bottom from './bottom'
import { DataContext } from '../assets/provider'

export default class task_list extends Component {
    static contextType = DataContext
    render() {
        const { data } = this.context

        return (
            <View style={styles.body}>
                {
                    data != [] &&
                    (<FlatList
                        style={styles.container}
                        alignItems='center'
                        data={data}
                        renderItem={({ item }) => {
                            // console.log(item.taskID, "flatlist")
                            return (
                                <Card text={item.taskName} id={item.taskID} />
                            )
                        }}
                    />)
                }
                {/* <View /> */}
                <Bottom />
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