// EnterCredentialsScreen
//
import React from 'react'
import {Text, View } from 'react-native'
import styles from '../styles/default'

export default class EnterCredentialsScreen extends React.Component {

  static navigationOptions = {
    title: 'Enter Credentials',
  }

  render() {

    return (
        <View style={styles.container} >
            <Text style={styles.titleText} >Enter Credentials Screen</Text>
            <Text style={styles.paragraph} />
        </View>
    )
  }
}
