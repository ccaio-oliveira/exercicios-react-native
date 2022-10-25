import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

const Aleatorio = ({ min, max }) => {
    const delta = max - min + 1;
    const aleatorio = parseInt(Math.random() * delta + min);

    return(
        <Text style={estilo.txtG}>O valor aleatório é {aleatorio}</Text>
    )
};

export default Aleatorio;