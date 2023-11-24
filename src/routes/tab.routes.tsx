import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import theme from "../styles/app";
import Home from "../screens/Home/Home";
import Search from "../screens/Search/Search";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.secodaryColor,
      }}
    >
      <Tab.Screen
        name="Balança"
        component={Home}
        options={{
          tabBarIcon: ({ color = theme.thirdaryColor, size = 30 }) => (
            <Feather name="plus-square" size={size} color={color} />
          ),
          tabBarLabel: "Inicio",
        }}
      />
      <Tab.Screen
        name="Busca"
        component={Search}
        options={{
          tabBarIcon: ({ color, size = 30 }) => (
            <Feather name="search" size={size} color={color} />
          ),
          tabBarLabel: "Busca",
        }}
      />
    </Tab.Navigator>
  );
}

export default TabRoutes;
