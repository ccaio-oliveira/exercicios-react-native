import React from 'react';
import { Text } from 'react-native';
import Estilo from './estilo';

const MinMax = ({ max, min }) => {
    return(
        <Text style={Estilo.txtG}>
            O valor {max} é maior que o valor {min}!
        </Text>
    )
};

export default MinMax;