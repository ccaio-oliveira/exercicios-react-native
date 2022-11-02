import React, { useState } from "react";
import { Text, Button } from "react-native";
import estilo from "./estilo";

const Contador = ({ inicial = 0, passo = 1 }) => {
    // let numero = inicial;
    const [numero, setNumero] = useState(inicial);

    const inc = () => setNumero(numero + passo);
    const dec = () => setNumero(numero - passo);

    return (
        <>
            <Text style={estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc} />
            <Button title="-" onPress={dec} />
        </>
    )
}

export default Contador;