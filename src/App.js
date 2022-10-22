import React from "react";
import { View, Platform, StatusBar, StyleSheet } from "react-native";

// import Comp, { Comp1, Comp2 } from './components/Multi';
// import Primeiro from './components/Primeiro';
import MinMax from "./components/MinMax";

const App = () => {
    return (
        <View style={style.App}>
            {/* <Comp />
            <Comp1 />
            <Comp2 />
            <Primeiro /> */}
            <MinMax />
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    }
})

export default App;