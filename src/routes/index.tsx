import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Dashboard} from '../screens/Dashboard/index'
import {Login} from '../screens/Login/index'
import {Wellcome} from '../screens/Wellcome/index'

const Stack = createStackNavigator()

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name="Wellcome" component={Wellcome}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes