/**
 * ChooseQrCodeScreen.js
 */

import React from 'react'
import {Text, Button, View, TextInput } from 'react-native'
import styles from '../styles/default'
import QRCode from 'react-native-qrcode'




import sms from '../../app/sms.js'

export default class ChooseQrCodeScreen extends React.Component {


  constructor(props) {
    super(props);
    this.state = { phoneNumber: ''}
  }

  static navigationOptions = {
    title: 'Select QR Code or SMS',
  }

  state = {
    qrCodeUri: "https://f2f-root.surge.sh"
  }

  
  sendSms = () => {

    const { navigate } = this.props.navigation;

    navigate('NoTime')

  }

  finished = () => {

    const { navigate } = this.props.navigation;

    navigate('Start')

  }
  
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View
      style={styles.container}
      behavior="padding">

   <Button
      onPress = {this.sendSms}
      title = "Send as a SMS"
      color = "red"
   />

        <Text style={styles.paragraph} />
        <Text style={styles.paragraph} >Or scan QR code in iOS Camera app </Text>
        <Text style={styles.paragraph} />

     <QRCode
       value="https://f2f-root.surge.sh"
       size={360}
       bgColor='black'
       fgColor='white'/>

        <Text style={styles.paragraph} />

          <Button
      onPress = {this.finished}
      title = "Finished"
      color = "green"
   />


   </View>
    )
  }
}