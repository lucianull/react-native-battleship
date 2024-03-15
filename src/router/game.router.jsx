import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home.screen';
import ProfileScreen from '../screens/Profile.screen';
import { GameRouteNames } from './route-names';

const GameStack = createNativeStackNavigator()

const gameRoutes = (
    <GameStack.Navigator 
        initialRouteName={GameRouteNames.HOME}
        screenOptions={{
            headerShown: false
        }}
    >
        <GameStack.Screen name={GameRouteNames.HOME} component={HomeScreen}/>
        <GameStack.Screen name={GameRouteNames.PROFILE} component={ProfileScreen}/>
    </GameStack.Navigator>
)

export default gameRoutes;