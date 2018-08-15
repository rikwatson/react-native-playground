import React from 'react'
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native'

import TaapPulseWeb from '../../TaapPulseWeb'

export default class WwwRootScreen extends React.Component {

    static navigationOptions = {
        title: 'DMS: Discharge Mgt. System',
        
        // header: { visible: false } // !!! Hide Header
      }


    render() {
      const { navigate } = this.props.navigation

      return (
        <TaapPulseWeb/>
      )

    }
  }