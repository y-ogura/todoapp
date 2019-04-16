import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '@atoms/Header'
import TodoItemList from '@organisms/TodoItemList'

export default class Todo extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <TodoItemList />
      </View>
    )
  }
}