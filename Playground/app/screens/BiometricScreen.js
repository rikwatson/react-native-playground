import React from 'react'
import { Image, StyleSheet, Text, View, AppRegistry, Button } from 'react-native'

import TouchID from 'react-native-touch-id'
import * as Keychain from 'react-native-keychain';

// REFERENCES:
// * http://blog.theodo.fr/2018/04/add-touch-id-react-native-app/
//

const bio = function(){
  async () => {
    const username = 'zuck';
    const password = 'poniesRgr8';

    // Store the credentials
    await Keychain.setGenericPassword(username, password);

    try {
      // Retreive the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log('Credentials successfully loaded for user ' + credentials.username);
      } else {
        console.log('No credentials stored')
      }
    } catch (error) {
      console.log('Keychain couldn\'t be accessed!', error);
    }
    await Keychain.resetGenericPassword()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image: {
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    textAlign: 'center',
  },
})

const testBiometricsAvailable = (noBiometrics = e => e) => {

  TouchID.isSupported()
  .then(biometryType => {
    // Success code
    if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
    } else {
        console.log('TouchID is supported.');
    }
  })
  .catch(error => {
    // Failure code
    console.log(error);
    noBiometrics()
  })
}

const authenticateWithBiometrics = (success = s => s, failure = f => f, noBiometrics = e => e) => {

  const localSuccess = () => {success()}

  TouchID.isSupported()
  .then(biometryType => {
    // Success code
    if (biometryType === 'FaceID') {
        console.log('FaceID is supported.');
    } else {
        console.log('TouchID is supported.');
    }

    TouchID.authenticate('Authenticate with biometrics') // Show the Touch ID prompt
    .then(success => {

      console.log("..Success")
      // Touch ID authentication was successful!
      // Handle the successs case now.
      //
      localSuccess()
    })
    .catch(error => {
      console.log("..Failure")
      failure()
      // Touch ID Authentication failed (or there was an error)!
      // Also triggered if the user cancels the Touch ID prompt
      // On iOS and some Android versions, `error.message` will tell you what went wrong
    })

  })
  .catch(error => {
    // Failure code
    console.log(error);
    noBiometrics()
  })
}


export default class BiometricScreen extends React.Component {

  static navigationOptions = {
    title: 'Discharge Management',
  }

  render() {
    const { navigate } = this.props.navigation;

    // If no biometrics, then fail (display NoBiometrics screen).
    //
    // testBiometricsAvailable(noBiometrics = () => navigate('NoBiometrics'))

    // Biometrics available so use them.
    //
    authenticateWithBiometrics(success = () => navigate('WwwRoot'), failure = () => navigate('AuthenticationFailure'), noBiometrics = () => navigate('NoBiometrics')) 

    return (
      <View   style={styles.container} >
        <Image source={require('./icon.png')} style={styles.image} />
        <Text numberOfLines={5} style={styles.titleText} >Please use 'Biometric Scan' to login</Text>

      </View>
    )
  }
}


 /*       <Button
          title="Start Scan"
          onPress={() =>
            navigate('LoginScreen', { foo: 'Bar' })
          }
        /> */