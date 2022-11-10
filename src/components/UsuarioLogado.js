import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';
import If from './if';

export default ({ usuario }) => {
    const user = usuario || {};
    return (
        <>
            <If teste={user && user.nome && user.email}>
                <Text style={estilo.txtG}>Usuário Logado:</Text>
                <Text style={estilo.txtM}>{user.nome} - {user.email}</Text>
            </If>
        </>
    )
}