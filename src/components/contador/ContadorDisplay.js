import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import estilo from '../estilo';

export default ({ num }) => {
    return (
        <View style={style.Display}>
            <Text style={[estilo.txtG, style.DisplayText]}>
                {num}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
        marginTop: 30,
        borderRadius: 50
    },
    DisplayText: {
        color: '#FFF'
    }
})