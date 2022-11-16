import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import estilo from '../estilo';

export default ({num}) => {
    return (
        <View style={style.Container}>
            <Text style={[estilo.txtG, style.Num]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        padding: 10,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 200
    },

    Num: {
        color: '#fff'
    }
})