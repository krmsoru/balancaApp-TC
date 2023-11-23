import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";
import Search from "../screens/Search/Search";
import theme from "../styles/app";

const Tab = createBottomTabNavigator();
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Balança"
        component={Home}
        options={{
          tabBarActiveTintColor: theme.secodaryColor,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="weight" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Busca"
        component={Search}
        options={{
          tabBarActiveTintColor: theme.secodaryColor,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
