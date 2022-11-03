import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default ({ inc, dec }) => {
    return (
        <View style={style.ViewButton}>
            <Button title="+" onPress={inc}  />
            <Button title="-" onPress={dec} />
        </View>
    )
}

const style = StyleSheet.create({
    ViewButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
        width: 100,
    }
})