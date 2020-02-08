import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';
/**
 * @function Logout logs out the current user by dispatching the LOGOUT action
 * @param {object} props 
 */
function Logout(props) {
    return (
        <Button
            title='Logout'
            onPress={() => {
                props.dispatch({ type: 'LOGOUT' });
            }}
        />
    );
}

export default connect()(Logout);
