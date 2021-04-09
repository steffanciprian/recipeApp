import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (

            <TouchableOpacity
                style={styles.gridStyle}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id,
                            categoryTitle:itemData.item.title,
                        }
                    })
                }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}/>
    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridStyle: {
        flex: 1,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    }
});

export default CategoriesScreen;
