import { observable, action } from 'mobx'
import { newExpression } from '@babel/types';

export default class TodoStore {
  @observable list = []

  @observable inputText = ''

  @action
  onChangeText(message = '') {
    this.inputText = message
  }

  @action
  add() {
    if (this.inputText === '') return

    this.list.unshift({
      id: Math.random().toString(36).slice(-8),
      message: this.inputText,
      isCompleted: false
    })
    this.inputText = ''
  }

  @action
  toggleComplete(id) {
    this.list = this.list.map(o => o.id === id ? { ...o, isCompleted: !o.isCompleted } : o)
  }

  @action
  delete(id) {
    this.list = this.list.filter(o => o.id !== id)
  }
}