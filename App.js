import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from './src/screens/LandingPage';
import FormPage from './src/screens/FormPage';
import Results from './src/screens/Results';

import Constants from 'expo-constants';

const AppStack = createStackNavigator(
  {
    LandingPage: {
      screen: LandingPage,
      navigationOptions: {
        header: null,
        headerLeft: null,
        headerStyle: {
          backgroundColor: 'rgb(96,188,250)',
        },
        headerTitleStyle: {
          color: 'white'
        }
      },
    },
    Form: {
      screen: FormPage,
      navigationOptions: {
        headerLeft: null,
        header: null,
        headerLeft: null,
        headerStyle: {
          backgroundColor: 'rgb(96,188,250)',
        },
      },
    },
    Results: {
      screen: Results,
      navigationOptions: {
        headerLeft: null,
        header: null,
        headerLeft: null,
        headerStyle: {
          backgroundColor: 'rgb(96,188,250)',
        },
      },
    }
  }
);


const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    }
  )
);

const App = () => {
  return (
    <>
      <View style={styles.statusBar} />
      <AppContainer />
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  statusBar: {
    height: Constants.statusBarHeight,
  },
});
