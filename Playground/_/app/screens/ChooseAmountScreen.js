/**
 * ChooseAmountScreen.js
 */


import React from 'react'
import {View, Button, Picker, PickerIOS, SegmentedControlIOS, Text} from 'react-native'
import styles from '../styles/default'
import IOSPicker from 'react-native-ios-picker'

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
 

export default class ChooseAmountScreen extends React.Component {


  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Choose Donation',
  }

  state = {
    value: 1,
    amount: "20",
    selectedValue: '',
    selectedIndex: 2
  }

  change(d, i) {
    this.setState({selectedValue: d}) //i
  }

  next = () => {
    const { navigate } = this.props.navigation;

    navigate('ChooseQrCode')
  }

  render() {

    const data = [{label: '£10', value: '10'},{label: '£20', value: '20'},{label: '£30', value: '20'}]

    var radio_props = [
      {label: '£10', value: 0 },
      {label: '£20', value: 1 },
      {label: '£30', value: 2 },
      {label: '£50', value: 3 }
    ];


    return (
        <View
        style={styles.container}
        behavior="padding">

                <Text style={styles.titleText} >How much would you like to donate?</Text>
                <Text style={styles.paragraph} />

        <RadioForm
  radio_props={radio_props}
  initial={2}
  buttonColor={'#008000'}
  buttonInnerColor={'#008000'}
  onPress={(value) => {this.setState({value:value})}}
/>




        <Button
           onPress = {this.next}
           title = "Next"
           color = "green"
        />



      </View>
    )
  }
}


/*

        <SegmentedControlIOS
          values={['£10', '£20', '£40']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />


        <IOSPicker 
          selectedValue={this.state.selectedValue}

          onValueChange={(d, i)=> this.change(d, i)}>
          { 
            data.map((item, index)=>
              <Picker.Item key={index} label={item.label} value={item.value} />
            )
          }
        </IOSPicker>


        <PickerIOS 
        selectedValue={this.state.amount}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => this.setState({amount: itemValue})}>
        <PickerIOS.Item key="1" label="£10" value="10" />
        <PickerIOS.Item key="2" label="£20" value="20" />
        <PickerIOS.Item key="3" label="£30" value="30" />
        <PickerIOS.Item key="4" label="£50" value="50" />
        </PickerIOS >
*/