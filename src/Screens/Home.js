//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { decrement, increment } from '../redux/action';
import store from '../redux/store';


// create a component
const Home = ({ subscribe, getState,dispatch }) => {


    const [number, setNumber] = useState(0)



    useEffect(() => {
        const unsubscribe = subscribe(() => {
            let value = getState().num
            setNumber(value)
            console.log("store value", value)
        })
        return () => {
            unsubscribe()
        }
    }, [])

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
