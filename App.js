import React from 'react';
import Home from './src/Home';
import Chat from './src/Chat';
import { StyleSheet, Text, View } from 'react-native';
import {Router, Scene,} from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='home' component = {Home} title = 'Home'/>
          <Scene key='chat' component = {Chat} title = 'Chat'/>
        </Scene>
      </Router>
    );
  }
}
