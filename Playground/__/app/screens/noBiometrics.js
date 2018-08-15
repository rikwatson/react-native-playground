import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


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


export default class noBiometrics extends React.Component {

  static navigationOptions = {
    title: 'No Biometrics',
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View   style={styles.container} >
        <Text style={styles.titleText} >Biometrics Not Available</Text>
        <Text style={styles.paragraph} />
        <Text style={styles.paragraph} >Please either enable biometrics for this device (via Setting) or run the application on a device with Touch ID or Face ID available.</Text>

      </View>
    )
  }
}
