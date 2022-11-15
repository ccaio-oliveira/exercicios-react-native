import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';
import produtos from './produtos';

export default () => {
    function lista(){
        return produtos.map(p => {
            return <Text style={estilo.txtM}>{p.id}) {p.nome} custa R$ {p.preco}</Text>
        })
    }
    return (
        <>
            <Text style={estilo.txtG}>
                Lista de Produtos
            </Text>
            {lista()}
        </>
    )
}