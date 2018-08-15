import React from 'react'
import {Text, View, Button, Image } from 'react-native'
import styles from '../styles/default';



export default class AuthenticationFailure extends React.Component {

  static navigationOptions = {
    title: 'TAAP F2F',
  }

  noTime = () => {
    const { navigate } = this.props.navigation;

    navigate('NoTime')

  }

  start = () => {
    const { navigate } = this.props.navigation;

    navigate('GiftAidOption')
  }

  render() {
    

    return (
      <View   style={styles.container} >
        <Text style={styles.titleText} >TAAP Digital Wallet Donation Platform</Text>
        <Text style={styles.paragraph} />
        <Image source={require('./img/logo.1024x1024.png')} style={{width:350, height: 350}} />
        <Text style={styles.paragraph} />
        <Button
           onPress = {this.noTime}
           title = "No Time?"
           color = "red"
        />

        <Button
           onPress = {this.start}
           title = "Good To Go"
           color = "green"
        />

        
  
      </View>
    )
  }
}
