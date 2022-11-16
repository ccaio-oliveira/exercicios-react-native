import React, { Component } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    };

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: +qtde });
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros).fill().reduce(nums => [...nums, this.gerarNumeroNaoContido(nums)], []).sort((a, b) => a - b);
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        return nums.map(num => {
            return <MegaNumero num={num} />
        })
    }

    render() {
        const { qtdeNumeros, numeros } = this.state;
        return (
            <>
                <Text style={estilo.txtG}>
                    Gerador de Mega-Sena {qtdeNumeros}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder='Qtde de Números' 
                    value={qtdeNumeros} 
                    onChangeText={this.alterarQtdeNumero} 
                />
                <Button 
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <View style={{ marginTop: 30, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {this.exibirNumeros()}
                </View>
            </>
        )
    }
}