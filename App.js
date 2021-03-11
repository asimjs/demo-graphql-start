import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './src/screens/Home'
import SignIn from './src/screens/SignIn'
import SignUp from './src/screens/Signup'
import Update from './src/screens/Update'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()
const Navigation = ({token}) => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={`${token?'Home':'Signin'}`}>
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
    useEffect(() => {
        loadToken()
    }, [])
    const loadToken = async () => {
        const token = await AsyncStorage.getItem('token')
        setToken(token)
        setLoading(false)
    }
    if(loading){
      return <></>
    }
    return <Navigation token={'token'} />
}
export default App
