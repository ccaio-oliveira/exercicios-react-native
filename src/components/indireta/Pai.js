import React, { useState } from "react";
import { Text } from "react-native";
import estilo from "../estilo";
import Filho from "./Filho";

const Pai = () => {
    const [texto, setTexto] = useState('');
    const [num, setNum] = useState(0);
    function exibirValor(numero, texto){
        setNum(numero);
        setTexto(texto);
    }

    return(
        <>
            <Text style={estilo.txtG}>{texto}{num}</Text>
            <Filho min={1} max={60} funcao={exibirValor} />
        </>
    )
}

export default Pai;