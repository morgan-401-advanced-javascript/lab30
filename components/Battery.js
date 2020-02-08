import React, {useState} from 'react';
import * as Battery from 'expo-battery';
import { Text, View } from 'react-native';

function Battery(){

   let state = {
        batteryLevel: null,
      };


  componentDidMount = ()=> {
    let batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscribe();
  }

  componentWillUnmount = ()=> {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };
    return (
      <View>
        <Text>Current Battery Level: {this.state.batteryLevel}</Text>
      </View>
    );
}

export default Battery;