//import liraries
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/action';


// create a component
const Home = (props) => {
    const number = useSelector((state) => state.num)
    const dispatch = useDispatch()

    const onAdd = () => {
        dispatch(increment(number))
    }

    const onDec = () => {
        dispatch(decrement(number))
    }

    return (
        <View style={styles.container}>
            <Text>{number}</Text>
            <Text>Home</Text>

            <Button
                title='ADD'
                onPress={onAdd}
            />

            <Button
                title='DEC'
                onPress={onDec}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default Home;
