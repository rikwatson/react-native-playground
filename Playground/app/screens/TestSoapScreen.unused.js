import React from 'react'
import {Text, View, Button, Image, Alert } from 'react-native'

import soap from '../components/soap'

export default class TestSoapScreen extends React.Component {

  static navigationOptions = {
    title: 'DMS: Discharge Mgt. System',

    // header: { visible: false } // !!! Hide Header
  }

  result = (text) => {

    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }

  go = () => {
    const { navigate } = this.props.navigation;

    soap(this.result)

  }

  render() {

    console.log("Test SOAP Screen")

    return (
      <View>
      <Button
      onPress = {this.go}
      title = "GO"
      color = "red"
   />
   </View>
    )

  }
}