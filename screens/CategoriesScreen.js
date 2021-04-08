import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {CATEGORIES} from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity
                style={styles.gridStyle}
                onPress={() => {
                    props.navigation.navigate('CategoryMeals')
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
    headerStyle:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Platform.OS === 'ios' ? '' :
        Colors.primaryColor,
    },
    headerTintColor:Platform.OS === 'ios' ? Colors.primaryColor :
        'white',
    headerTitleStyle:{
        alignSelf:'center'
    }

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
