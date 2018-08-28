// EnterPinScreen
//
import React from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert
} from 'react-native'

import PINCode from '@haskkor/react-native-pincode'


import {hasUserSetPinCode} from '@haskkor/react-native-pincode'


class EnterPinScreen extends React.Component {

  render() {

    const { navigate } = this.props.navigation;

    const finished = () => {navigate('WwwRoot')} 

    return (
      <View style={styles.container}>
        <PINCode
          status={'choose'}
          subtitleChoose={'To secure TAAP DMS'}
          touchIDSentence={'To unlock TAAP DMS'}
          finishProcess={finished}/>
      </View>
      )
  }

  // choose enter locked
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

})

export default EnterPinScreen
/*



export default class EnterPinScreen extends React.Component {

  static navigationOptions = {
    title: 'Enter Pin',
  }

  _onFinishCheckingCode1(isValid) {
    console.log(isValid);
    if (!isValid) {
      Alert.alert(
        'Confirmation Code',
        'Code not match!',
        [{text: 'OK'}],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        'Confirmation Code',
        'Successful!',
        [{text: 'OK'}],
        { cancelable: false }
      );
    }
  }
  

  render() {

    return (
      <View style={styles.inputWrapper2}>
      <Text style={styles.inputLabel2}>BOX CONFIRMATION CODE</Text>
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
    </View>

    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6CE'
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'red',
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 30
  },
  wrapper: {
    marginTop: 30
  },
  inputWrapper1: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#009C92'
  },
  inputWrapper2: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E0F8F1'
  },
  inputWrapper3: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#2F0B3A'
  },
  inputLabel1: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800'
  },
  inputLabel2: {
    color: '#31B404',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center'
  },
  inputLabel3: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center'
  }
})



      <View>
        <Text>This is the EnterPinScreen</Text>
      </View>

*/