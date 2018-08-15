// From https://github.com/ttdung11t2/react-native-confirmation-code-input
//
import React, {Component} from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native'
import CodeInput from 'react-native-confirmation-code-input'

export default class App extends Component<Props> {
render() {
    return (

      
      <CodeInput
        ref="codeInputRef2"
        keyboardType="numeric"
        codeLength={5}
        className='border-circle'
        compareWithCode='12345'
        autoFocus={false}
        codeInputStyle={{ fontWeight: '800' }}
        onFulfill={(isValid, code) => this._onFinishCheckingCode2(isValid, code)}
      />
    )
  }
}

/*

      <CodeInput
        ref="codeInputRef1"
        secureTextEntry
        className={'border-b'}
        space={5}
        size={30}
        inputPosition='left'
        onFulfill={(code) => this._onFulfill(code)}
      />
      
      <CodeInput
        ref="codeInputRef2"
        secureTextEntry
        compareWithCode='AsDW2'
        activeColor='rgba(49, 180, 4, 1)'
        inactiveColor='rgba(49, 180, 4, 1.3)'
        autoFocus={false}
        ignoreCase={true}
        inputPosition='center'
        size={50}
        onFulfill={(isValid) => this._onFinishCheckingCode1(isValid)}
        containerStyle={{ marginTop: 30 }}
        codeInputStyle={{ borderWidth: 1.5 }}
      />
*/