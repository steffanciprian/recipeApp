import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
import {Platform} from "react-native";

const MealsNavigator = createStackNavigator({
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen,

    },
    {
        defaultNavigationOptions:
            {
                headerStyle: {
                    backgroundColor: Platform.OS === 'ios' ? '' :
                        Colors.primaryColor,
                },
                headerTintColor: Platform.OS === 'ios' ? Colors.primaryColor :
                    'white',
                headerTitleAlign: 'center',
            }
    })

export default createAppContainer(MealsNavigator);
