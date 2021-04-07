import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo ';

const fetchFonts = () => {
    Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    return !fontLoaded ?
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}/>
        : null;


    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}
