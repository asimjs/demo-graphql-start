import { CommonActions, useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Divider from '../styles/Divider'
import Style from '../styles/Style'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const navigation = useNavigation()
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Divider height={30} />
            <TextInput
                placeholder={'username'}
                style={Style.input}
                onChangeText={(text) => {
                    setUsername(text)
                }}
            />
            <Divider />
            <TextInput
                placeholder={'password'}
                style={Style.input}
                onChangeText={(text) => {
                    setPassword(text)
                }}
                secureTextEntry
            />
            <Divider height={10} />
            {loading && <ActivityIndicator animating={true} />}
            {!loading && error && <Text style={Style.error}>{error}</Text>}
            <Divider height={20} />
            <Button
                title={'Sign In'}
                onPress={() => {
                    if (!username || !password) {
                        setError('Please fill everything before proceeding')
                    } else {
                        setError(null)
                    }
                }}
            />
            <Divider height={70} />
            <Text>Do not have account?</Text>
            <Button
                onPress={() => {
                    navigation.push('Signup')
                }}
                title={'Signup'}
            />
        </View>
    )
}
export default SignIn
