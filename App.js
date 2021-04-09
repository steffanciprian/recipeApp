import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MealsNavigator from "./Navigation/MealsNavigator";
import {enableScreens} from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
    Font.loadAsync({
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    })
};

export default function App() {

    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
            onError={(err) => console.log(err)}/>
    }


    return (
        <MealsNavigator/>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

