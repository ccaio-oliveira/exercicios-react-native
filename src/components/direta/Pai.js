import React from "react";
import { Text } from "react-native";
import estilo from "../estilo";
import Filho from "./Filho";

const Pai = () => {
    let x = 13;
    let y = 100;
    return(
        <>
            <Filho a={x} b={y} />
            <Filho a={x + 100} b={y + 200} />
        </>
    )
}

export default Pai;