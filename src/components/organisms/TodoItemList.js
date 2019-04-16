import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { inject, observer } from 'mobx-react/native'
import TodoItem from '@atoms/TodoItem'

@inject('todoStore')
@observer
export default class TodoItemList extends Component {
  render () {
    const { todoStore } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', height: '100%' }}>
          <ScrollView style={{ flex: 1 }}>
            {todoStore.list.map(
              (row) => (
                <TodoItem item={row}/>
              )
            )}
          </ScrollView>
        </View>
      </View>
    )
  }
}