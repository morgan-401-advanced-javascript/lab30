import React, { useState } from 'react';
import { dateFix } from './util';
import { View, Text, Switch, TextInput, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

/**
 * @function TaskAdd this will allow us to add tasks to our database
 * @param {object} props 
 */
function TaskAdd(props) {

    let currentDate = new Date().toLocaleDateString();

    let [name, setName] = useState('');
    let [description, setDescription] = useState('');
    let [priority, setPriority] = useState('');
    let [date, setDate] = useState(dateFix(dateFix(currentDate)));
    let [isComplete, setIsComplete] = useState(false);
    let [showDTP, setShowDTP] = useState(false);


    let h1 = {
        fontSize: 40,
        textAlign: 'center',
    };

    let label = {
        fontSize: 20,
        color: '#555',
    };

    return (
        <View>
            <Text style={h1}>Add Tasks</Text>
            <Text style={label}>Name:</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text style={label}>Description:</Text>
            <TextInput value={description} onChangeText={setDescription} />

            <Text style={label}>Priority:</Text>
            <TextInput
                value={priority.toString()}
                keyboardType='numeric'
                onChangeText={setPriority}
            />

            <Text style={label}>Date:</Text>
            <Button
                title={date.toString()}
                onPress={() => {
                    setShowDTP(true);
                }}
            />

            {showDTP ? (
                <View>
                    <DateTimePicker
                        value={new Date(date)}
                        mode='date'
                        is24Hour={true}
                        display='default'
                        onChange={(e, date) => {
                            setDate(dateFix(date));
                        }}
                    />
                    <Button
                        title='confirm'
                        onPress={() => {
                            setShowDTP(false);
                        }}
                    />
                </View>
            ) : (
                <View></View>
            )}

            <Text style={label}>Is Complete:</Text>
            <Switch value={isComplete} onChange={setIsComplete} />

            <Button
                title='Save Changes'
                onPress={e => {
                    props.add({
                        name,
                        description,
                        priority,
                        date,
                        isComplete,
                    });
                    props.close();
                }}
            />

            <Button
                title='Cancel'
                onPress={e => {
                    props.close();
                }}
            />
            
        </View>
    );
}

export default TaskAdd;