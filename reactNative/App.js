import { StatusBar } from "expo-status-bar";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from "./pages/Home";
import Car from "./pages/Car";
import NewCar from "./pages/NewCar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "New Car") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Car") {
              iconName = focused ? "car" : "car-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          listeners={({ navigation, route }) => ({
            tabPress: (e) => {
              navigation.navigate ("Home", {refresh: true});
            },
          })}
        />
        <Tab.Screen name="Car" component={Car} />
        <Tab.Screen name="New Car" component={NewCar} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
