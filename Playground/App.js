/**
 * (c) onTAAP Ltd.
 *
 * @format
 * @flow
 */
'use strict'

import { StackNavigator } from 'react-navigation'

import pin              from './app/screens/pin'


/*
import NoTimeScreen             from './app/screens/NoTimeScreen'
import GiftAidOptionScreen      from './app/screens/GiftAidOption'
import GiftAidInformationScreen from './app/screens/GiftAidInformationScreen'
import ChooseAmountScreen       from './app/screens/ChooseAmountScreen'
import ChooseQrCodeScreen       from './app/screens/ChooseQrCodeScreen'

/*
import MainScreen               from './app/screens/MainScreen'


import GiftAidInformationScreen from './app/screens/GiftAidInformationScreen'

*/

const MainApp = StackNavigator({
  Start:                    {screen: pin}, /*
  NoTime:                   {screen: NoTimeScreen},
  GiftAidOption:            {screen: GiftAidOptionScreen},
  GiftAidInformation:       {screen: GiftAidInformationScreen},
  ChooseAmount:             {screen: ChooseAmountScreen},
  ChooseQrCode:             {screen: ChooseQrCodeScreen},
/*

  Main:                     {screen: MainScreen},


  GiftAidInformationScreen: {screen: GiftAidInformationScreen},*/

}, {
  initialRouteName: 'Start',
//  headerMode: 'none',
  cardStyle: { backgroundColor: 'transparent' }
})

export default MainApp