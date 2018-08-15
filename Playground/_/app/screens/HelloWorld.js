import React, { Component } from 'react'

import QRCode from 'react-native-qrcode'

import {
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView  // https://medium.freecodecamp.org/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580
} from 'react-native'


import sms from '../../app/sms.js'
import { Button, SegmentedControlIOS } from 'react-native'


export default class HelloWorld extends React.Component {
    state = {
      qrCodeUri: 'http://facebook.github.io/react-native/',
  
      selectedIndex: 1,
      segmentSelectedIndex: 0,
  
      name: "Please enter your name",
      giftAid: true,
      address: "Postcode lookup magic",
  
  
      noTime: false,
    }
  
    sendSms = () => {
      sms('07900658883', 'Hi old friend').catch(console.error)
    }
    
  
    render() {
      return (
  
  
        <KeyboardAvoidingView
           style={styles.container}
           behavior="padding">
  
        <Button
           onPress = {this.sendSms}
           title = "Send as a SMS"
           color = "red"
        />
  
  
              <View>
  
                <SegmentedControlIOS
                  values={['First', 'Second']}
                  selectedIndex={this.state.segmentSelectedIndex }
                  onChange={(event)=>
                          this.setState({
                                    segmentSelectedIndex: event.nativeEvent.selectedSegmentIndex})   
                                    }
                />
  
                <SegmentedControlIOS
                  values={['One', 'Two']}
                  selectedIndex={this.state.selectedIndex}
                  onChange={(event) => {
                    this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
                  }}
                />
  </View>
  
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({qrCodeUri: text})}
            value={this.state.qrCodeUri}
          />
          <QRCode
            value={this.state.qrCodeUri}
            size={200}
            bgColor='purple'
            fgColor='white'/>
        </KeyboardAvoidingView>
  
      );
    };
  }
  
  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center'
      },
  
      input: {
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10,
          borderRadius: 5,
          padding: 5,
      },
  
      text: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        margin: 10,
      },
  });   