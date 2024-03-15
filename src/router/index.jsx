import React, { useContext } from "react"
import { NavigationContainer } from '@react-navigation/native';
import UserContext from "../contexts/UserContextProvider";
import gameRoutes from "./game.router";
import authRoutes from "./auth.router";


const Router = () => {
    const {user} = useContext(UserContext);
    return (
        <NavigationContainer>
            {user.accessToken ? gameRoutes : authRoutes}
        </NavigationContainer>
    )
}

export default Router;