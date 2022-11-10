import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

export default ({children}) => {
    return (
        <>
            <Text>[Início] Membros da Família:</Text>
            {children}
            <Text style={estilo.family}>[Fim] Membros da Família</Text>
        </>
    )
}