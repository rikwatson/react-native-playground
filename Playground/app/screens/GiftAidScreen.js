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


export default class AuthenticationFailure extends React.Component {

  static navigationOptions = {
    title: 'Authentication Failure',
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View   style={styles.container} >
        <Text style={styles.titleText} >Authentication Failure</Text>
        <Text style={styles.paragraph} />
        <Text style={styles.paragraph} >Biometrics authentication failed.</Text>
      </View>
    )
  }
}
