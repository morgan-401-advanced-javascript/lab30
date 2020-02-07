import React, { useState } from 'react';
import { dateFix } from './util';
import { View, Text, Switch, TextInput, Button } from 'react-native';

function TaskEdit(props) {
    let [name, setName] = useState(props.task.name);
    let [description, setDescription] = useState(props.task.description);
    let [priority, setPriority] = useState(props.task.priority);
    let [date, setDate] = useState(dateFix(props.task.date));
    let [isComplete, setIsComplete] = useState(props.task.isComplete);

    /* onSubmit={e => {
                    e.preventDefault();
                    props.edit({
                        id: props.task.id,
                        name,
                        description,
                        priority,
                        date,
                        isComplete,
                    });
                    props.close();
                }} */

    let h1 = {
        fontSize: 60,
        textAlign: 'center',
    };

    let label = {
        fontSize: 30,
        color: '#555',
    };

    return (
        <View>
            <Text style={h1}>Edit Tasks</Text>
            <Text style={label}>Name:</Text>
            <TextInput value={name} onChangeText={setName} />

            <Text style={label}>Description:</Text>
            <TextInput value={description} onChangeText={setDescription} />

            <Text style={label}>Priority:</Text>
            <TextInput value={priority} onChangeText={setPriority} />

            <Text style={label}>Date:</Text>
            <TextInput value={date} onChangeText={setDate} />

            <Text style={label}>Is Complete:</Text>
            <Switch value={isComplete} onChange={setIsComplete} />

            <Button
                title='Save Changes'
                onPress={e => {
                    props.edit({
                        id: props.task.id,
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

export default TaskEdit;