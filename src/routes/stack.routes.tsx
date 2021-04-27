import React from 'react'


import { createStackNavigator } from '@react-navigation/stack'
import colors from '../styles/colors'
import HomePage from '../pages/HomePage'
import NewAccountPage from '../pages/NewAccountPage'
import SigninPage from '../pages/SigninPage'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (

    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={
            {
                cardStyle: {
                    backgroundColor: colors.white
                }
            }
        }
    >
        <stackRoutes.Screen
            name="HomePage"
            component={HomePage}
        />

        <stackRoutes.Screen
            name="NewAccountPage"
            component={NewAccountPage}
        />

        <stackRoutes.Screen
            name="SigninPage"
            component={SigninPage}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes