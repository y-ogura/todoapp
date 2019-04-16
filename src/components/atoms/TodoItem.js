import React, { Component } from 'react'
import { Alert } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { inject, observer } from 'mobx-react/native'

@inject('todoStore')
@observer
export default class TodoItem extends Component {
  constructor(props) {
    super(props)
  }
  static defaultProps = {
    item: {
      id: '',
      message: '',
      isCompleted: false
    }
  }
  render () {
    const { todoStore } = this.props
    return (
      <CheckBox
        key={this.props.item.id}
        title={this.props.item.message}
        onPress={() => todoStore.toggleComplete(this.props.item.id)}
        onLongPress={() => {
          Alert.alert(
            '確認',
            `[${this.props.item.message}]を削除しますか？`,
            [
              { text: '削除しない', style: 'cancel'},
              { text: '削除', onPress: () => todoStore.delete(this.props.item.id)}
            ]
          )
        }}
        checked={this.props.item.isCompleted}
      />
    )
  }
}