import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRouteNames } from './route-names';
import { Text } from 'react-native'
import LoginScreen from '../screens/Login.screen';
import RegisterScreen from '../screens/Register.screen';

const AuthStack = createNativeStackNavigator()

const authRoutes = (
    <AuthStack.Navigator 
        initialRouteName={AuthRouteNames.LOGIN} 
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthStack.Screen name={AuthRouteNames.LOGIN} component={LoginScreen}/>
        <AuthStack.Screen name={AuthRouteNames.REGISTER} component={RegisterScreen} options={{
            headerTitle: (props) => <Text {...props}>Sign Up</Text>
        }}/>
    </AuthStack.Navigator>
)

export default authRoutes;