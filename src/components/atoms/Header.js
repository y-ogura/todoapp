import React, { Component } from 'react'
import { View, Button } from 'react-native'
import { Input } from 'react-native-elements'
import { inject, observer } from 'mobx-react/native'
import Todo from '../pages/Todo';

@inject('todoStore')
@observer
export default class Header extends Component {
  render () {
    const { todoStore } = this.props
    return (
      <View>
        <View style={{ marginTop: 20, flexDirection: 'row'}}>
          <View style={{ flex: 5 }}>
            <Input
              autoCapitalize="none"
              value={todoStore.inputText}
              onChangeText={(message) => todoStore.onChangeText(message)}
              onSubmitEditing={() => todoStore.add()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="ADD"
              onPress={() => todoStore.add()}
            />
          </View>
        </View>
      </View>
    )
  }
}