import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/Signup'
import Update from './src/screens/Update'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()
const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Signin'>
            <Stack.Screen name='Signin' component={SignIn} />
            <Stack.Screen name='Signup' component={SignUp} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Update' component={Update} />
        </Stack.Navigator>
    </NavigationContainer>
)
const App = () => {
    const [token,setToken] = useState()
    const [loading,setLoading] = useState(true)
    console.log('Called')
    useEffect(() => {
        loadToken()
    }, [])
    const loadToken = async () => {
        const token = await AsyncStorage.getItem('token')
        setToken(token)
        console.log('token', token)
        setLoading(false)
    }
    return <Navigation />
}
export default App
