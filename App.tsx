import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favourite-context";

import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#173f5f" },
        headerTintColor: "white",
        screenContainerStyle: { backgroundColor: "#20629b" },
        drawerContentStyle: { backgroundColor: "#0c2233" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#20629b",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#173f5f",
              },
              headerTintColor: "white",
              contentStyle: {
                backgroundColor: "#20629b",
              },
            }}
          >
            <Stack.Screen
              name="MealCategories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealOverviewScreen}
              options={{
                title: "Meals Overview",
              }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailsScreen}
              options={{
                title: "Meals Detail ",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}
