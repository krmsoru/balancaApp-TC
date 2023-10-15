import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/home';
import Data from '../screens/data/data';
import Placeholder from '../screens/data/placeholder';
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import StylesApp from '../styles';

const Tab = createBottomTabNavigator();
const Styles = StylesApp();

export function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Inicio'
                component={Home}
                options={{

                    tabBarShowLabel: false,
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => <Ionicons size={size} color={color} name='home' />
                }}
            />
            <Tab.Screen
                name='Data'
                component={Data}
                options={{
                    tabBarShowLabel: false,
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="line-chart" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name='Configuração'
                component={Placeholder}
                options={{
                    tabBarShowLabel: false,
                    headerShown: true,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="cog" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}