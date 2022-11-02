import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

const Titulo = ({ principal, secundario }) => {
    return (
        <>
            <Text style={estilo.txtG}>{principal}</Text>
            <Text>{secundario}</Text>
        </>
    )
}

export default Titulo;