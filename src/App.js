import React from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";
import UsuarioLogado from "./components/UsuarioLogado";

// import Comp, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';
// import MinMax from "./components/MinMax";
// import Aleatorio from "./components/Aleatorio";
// import Titulo from "./components/Titulo";
// import Botao from "./components/Botao";
// import Contador from "./components/Contador";
// import Pai from "./components/indireta/Pai";
// import ContadorV2 from "./components/contador/ContadorV2";
// import Diferenciar from "./components/Diferenciar";
// import ParImpar from "./components/ParImpar";
// import Familia from "./components/relacao/Familia";
// import Membro from "./components/relacao/Membro";

const App = () => {
    return (
        <View style={style.App}>
            {/* <Comp />
            <Comp1 />
            <Comp2 />
            <Primeiro />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Aleatorio min={1} max={60} />
            <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto" />
            <Botao /> */}
            {/* <Contador inicial={100} passo={13}/>
            <Contador passo={20} /> */}
            {/* <Pai /> */}
            {/* <ContadorV2 /> */}
            {/* <Diferenciar /> */}
            {/* <ParImpar num={5}  /> */}
            {/* <Familia>
                <Membro nome="Bia" sobrenome="Arruda" />
                <Membro nome="Carlos" sobrenome="Arruda" />
            </Familia>
            <Familia>
                <Membro nome="Ana" sobrenome="Silva" />
                <Membro nome="julia" sobrenome="Silva" />
                <Membro nome="Gui" sobrenome="Silva" />
                <Membro nome="Rebeca" sobrenome="Silva" />
            </Familia> */}
            <UsuarioLogado usuario={{ nome: 'Caio', email: 'ccaio.oliveira82@gmail.com' }} />
            <UsuarioLogado usuario={{ nome: 'Caio' }} />
            <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
            <UsuarioLogado usuario={null} />
            <UsuarioLogado usuario={{}} />
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    }
})

export default App;