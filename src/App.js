import React from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";

import Comp, { Comp1, Comp2 } from './components/Multi';
import Primeiro from './components/Primeiro';

const App = () => {
    return (
        <View style={style.container}>
            <Comp />
            <Comp1 />
            <Comp2 />
            <Primeiro />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    }
})

export default App;