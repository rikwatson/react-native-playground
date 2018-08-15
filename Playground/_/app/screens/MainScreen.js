/**
 * This will become the main entry point for the app.
 */

import React from 'react'
import {Text, View } from 'react-native'
import styles from '../styles/default_2'


export default class AuthenticationFailure extends React.Component {

  static navigationOptions = {
    title: 'Authentication Failure',
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View   style={styles.container} >
        <Text style={styles.titleText} >This is the Main Screen</Text>
        <Text style={styles.paragraph} />
        <Text style={styles.paragraph} >Biometrics authentication failed.</Text>
      </View>
    )
  }
}
