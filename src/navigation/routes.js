import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/home/home';
import Hist from '../screens/hist';
import Configuration from '../screens/configuration';
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
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <Ionicons size={size} color={color} name='home' />
                }}
            />
            <Tab.Screen
                name='Data'
                component={Hist}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="line-chart" color={color} size={size} />
                }}
            />
            <Tab.Screen
                name='Configuração'
                component={Configuration}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name="cog" color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    );
}