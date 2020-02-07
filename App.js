import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import TaskList from './TaskList';

export default function App() {
    // <div> <p> Hello World </p> </div>
    // <View> == <div>
    // <Text> == <p>

    const [isComplete, setIsComplete] = useState(false);

    const toggle = (id, isComplete) => {
        setIsComplete(!isComplete);
    };

    const edit = task => {
        console.log('Editing Task', task);
    };

    const del = id => {
        console.log('Attempting to Delete', id);
    };

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.textBox}>Hello World</Text>
                <TaskList />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        fontSize: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBox: {
        fontSize: 50,
    },
});