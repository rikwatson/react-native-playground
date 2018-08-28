import React from 'react'
import TaapPulseWeb from '../components/TaapPulseWeb'

export default class WwwRootScreen extends React.Component {

  static navigationOptions = {
    title: 'DMS: Discharge Mgt. System',

    // header: { visible: false } // !!! Hide Header
  }


  render() {

    return (
      <TaapPulseWeb />
    )

  }
}