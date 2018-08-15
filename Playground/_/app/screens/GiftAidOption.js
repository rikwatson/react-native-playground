import React from 'react'
import {Text, Button, View, Image } from 'react-native'

import styles from '../styles/default_2'



export default class GiftAidOption extends React.Component {

  static navigationOptions = {
    title: 'Please select Gift Aid option',
  }

  yes = () => {
    const { navigate } = this.props.navigation;

    navigate('GiftAidInformation')

  }

  no = () => {
    const { navigate } = this.props.navigation;

    navigate('ChooseAmount')

  }

  render() {

    return (
      <View   style={styles.container} >
        <Text style={styles.titleText} >I would like to Gift Aid my donations</Text>

        <Image source={require('./img/gift-aid.jpg')} style={{width:360}} />

        <Text style={styles.paragraph} />
        <Text style={styles.paragraph} > I want the charity to treat all qualifying donations over the last four years, today,
            and in the future as Gift Aid donations. </Text>
        <Text style={styles.paragraph} />
        <Text style={styles.paragraph} >Gift Aid allows the charity to reclaim 25p on every £1 that I give.</Text>
        <Text style={styles.paragraph} />
        <Text style={styles.paragraph} >I am a UK taxpayer and understand that if I pay less income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all my donations in that tax year it is my responsibility to pay any difference.</Text>

        <Button
           onPress = {this.yes}
           title = "I would like to Gift Aid my donations"
           color = "green"
        />

        <Button
           onPress = {this.no}
           title = "I am unable to Gift Aid my donations"
           color = "red"
        />

      </View>
    )
  }
}
