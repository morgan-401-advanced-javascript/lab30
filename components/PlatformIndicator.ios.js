import React from 'react';
import { View, Text } from 'react-native';
/**
 * @function PlatformIndicator will only display if running on IOS device
 * @param {object} props 
 */
function PlatformIndicator(props) {
    return <Text>You're running on iOS</Text>;
}

export default PlatformIndicator;
