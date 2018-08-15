import React from 'react'
import { StyleSheet, Text, Button, View, TextInput } from 'react-native'
import sms from '../sms'
import styles from '../styles/default_2'


export default class NoTimeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { phoneNumber: ''}
  }

  static navigationOptions = {
    title: 'Send SMS',
  }

  state = {
    phoneNumber: ""
  }

  sendSms = () => {
    const { navigate } = this.props.navigation;


    sms(this.state.phoneNumber, 'Please visit https://f2f-root.surge.sh  to make your donation').catch(console.error)

    navigate('Start')
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View   style={styles.container} >
        <Text style={styles.titleText} >What's Your Phone Number?</Text>
        <Text style={styles.paragraph} />
        <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({phoneNumber: text})}
            value={this.state.phoneNumber}
            keyboardType="phone-pad" 
          />

        <Button
           onPress = {this.sendSms}
           title = "Send SMS"
           color = "green"
        />

      </View>
    )
  }
}
