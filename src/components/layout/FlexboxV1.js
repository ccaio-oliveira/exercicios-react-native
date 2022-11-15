import React from 'react';
import { StyleSheet, View } from 'react-native';
import Quadrado from './Quadrado';

export default () => {
    return (
        <View style={style.flexV1}>
            <Quadrado cor='#ff801a' />
            <Quadrado cor='#50d1f6' />
            <Quadrado cor='#dd22c1' />
            <Quadrado cor='#8312ed' />
            <Quadrado cor='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    flexV1: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'space-evenly'
    }
})