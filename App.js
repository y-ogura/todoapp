/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import { StyleSheet, SafeAreaView} from 'react-native'
import { Provider } from 'mobx-react/native'
import Todo from '@pages/Todo'
import stores from './src/stores'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Provider {...stores}>
          <Todo />
        </Provider>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F5FCFF'
  }
})
