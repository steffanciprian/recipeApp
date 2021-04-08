import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors";
import CategoriesScreen from "./CategoriesScreen";

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const categoryTitle = props.navigation.getParam('categoryTitle');
    return (
        <View style={styles.screen}>
            <Text> The categories screen with id: {categoryId}</Text>
            <Text> Category is: {categoryTitle}</Text>
            <Button title="Go to Meal Detail"
                    onPress={() => {
                        props.navigation.navigate('MealDetail')
                    }}/>
            <Button title="Go Back"
                    onPress={() => {
                        props.navigation.pop();
                    }}/>
        </View>
    )
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const categoryTitle = navigationData.navigation.getParam('categoryTitle');

    return{
        headerTitle: categoryTitle,
        headerStyle: {
            backgroundColor: Platform.OS === 'ios' ? '' :
                Colors.primaryColor,
        },
        headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor :
            'white',
        headerTitleAlign: {
            alignSelf: 'center'
        },
    }
// console.log(navigationData);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;
