import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { ActivityIndicator, Button, Text, TextInput, View } from 'react-native'
import Divider from '../styles/Divider'
import Style from '../styles/Style'

const Update = () => {
    const [username, setUsername] = useState('')
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
            <Divider height={10} />
            {loading && <ActivityIndicator animating={true} />}
            {!loading && error && <Text style={Style.error}>{error}</Text>}
            <Divider height={20} />
            <Button
                title={'Update'}
                onPress={() => {
                    if (!username) {
                        setError('Please fill everything before proceeding')
                    } else {
                        setError(null)
                    }
                }}
            />
        </View>
    )
}
export default Update
