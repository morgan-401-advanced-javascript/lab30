import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './components/TaskList';
import Login from './components/Login';
import Logout from './components/Logout';
import AuthViewer from './components/AuthViewer';
import styles from './components/stylesheet';
import Battery from './components/Battery.js';
/**
 * @function App this is our primary parent function that allows users to login and then displays tasks
 */
export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <AuthViewer reverse={true}>
                    
                    <Login />
                </AuthViewer>

                <AuthViewer>
                    <ScrollView style={styles.scrollView}>
                        <Battery />
                        <Logout />
                        <TaskList />
                    </ScrollView>
                </AuthViewer>
            </View>
        </Provider>
    );
}
