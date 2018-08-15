/**
 * GiftAidInformationScreen
 */

import React from 'react'
import {Text, Button, KeyboardAvoidingView, TextInput, View, Image, StyleSheet } from 'react-native'
// import styles from '../styles/default'

export default class GiftAidInformationScreen extends React.Component {


  constructor(props) {
    super(props)
  }

  static navigationOptions = {
    title: 'Collect GiftAid Information',
  }

  state = {
    name: "",
    address: ""
  }

  completed = () => {
    const { navigate } = this.props.navigation;

    navigate('ChooseAmount')
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
        <KeyboardAvoidingView
        style={styles.container}
        behavior="padding">

      
        <Text style={styles.titleText} >Name</Text>

        <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
            defaultValue = "Full Name"
            placeholder = "Full Name"
        />

        <Text style={styles.titleText} >Address</Text>

        <TextInput
            style={styles.input2}
            onChangeText={(text) => this.setState({address: text})}
            value={this.state.address}
            multiline={true}
            numberOfLines = {6}
            defaultValue = "UK address and Post code"
            placeholder = "UK address and Post code"
        />

        <Button
           onPress = {this.completed}
           title = "Completed"
           color = "green"
        />

                <Text style={styles.paragraph} />
                <Text style={styles.paragraph} />

      </KeyboardAvoidingView>
    )
  }
}

const styles =  StyleSheet.create({
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

    input2: {
      height: 160,
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
})

