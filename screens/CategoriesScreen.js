import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from "react-native";

const CategoriesScreen = props => {
    console.log(props);
    return (
        <View style={styles.screen}>
            <Text> The categories screen</Text>
            <Button title="Go to meals!" onPress={() => {
                props.navigation.navigate('CategoryMeals');
            }}/>

        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoriesScreen;
