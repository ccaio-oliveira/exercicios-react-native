import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import estilo from './estilo';

export default () => {
    let [nome, setNome] = useState('Teste');
    return (
        <View>
            <Text style={estilo.txtG}>{nome}</Text>
            <TextInput 
                placeholder='Digite seu Nome' 
                value={nome} 
                onChangeText={e => setNome(e)}
            />
        </View>
    )
}