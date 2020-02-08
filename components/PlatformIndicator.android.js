import React from 'react';
import { View, Text } from 'react-native';
/**
 * @function PlatformIndicator will only display if using an Android device
 * @param {object} props 
 */
function PlatformIndicator(props) {
    return <Text>You're running on Android</Text>;
}

export default PlatformIndicator;
