import React from 'react'

import { StackNavigator } from 'react-navigation'

import BiometricScreen       from './app/screens/BiometricScreen'
import WwwRootScreen         from './app/screens/WwwRootScreen'
import noBiometrics          from './app/screens/noBiometrics'
import LoginScreen           from './app/screens/LoginScreen'
import AuthenticationFailure from './app/screens/AuthenticationFailure'


const MainApp = StackNavigator({
  Start:                 {screen: BiometricScreen},
  WwwRoot:               {screen: WwwRootScreen},
  NoBiometrics:          {screen: noBiometrics},
  LoginScreen:           {screen: LoginScreen},
  AuthenticationFailure: {screen: AuthenticationFailure}
}, {
  initialRouterName: 'Start',
  headerMode: 'none',
  cardStyle: { backgroundColor: 'transparent' }
})

export default MainApp