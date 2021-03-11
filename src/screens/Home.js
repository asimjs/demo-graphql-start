import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { ActivityIndicator, Button, FlatList, Text, View } from 'react-native'
import Style from '../styles/Style'

const Home = () => {
    const demo = [
        {
            id: '378441aa-5d44-4547-b78d-564e9c1844be',
            email: 'testafter@gamil.com',
            username: 'testafter',
        },
        {
            id: '9178a7b8-d5c9-46db-8833-007aa843d176',
            email: 'kamesh@codebrahma.com',
            username: 'Kamesh',
        },
        {
            id: '54dbba06-de5c-4fe5-a71f-bde531755c2f',
            email: 'ar@gmail.com',
            username: 'maybegood',
        },
        {
            id: 'd0801a3a-5e35-4a99-bb3c-ada8f0939acd',
            email: 'testmail@gmail.com',
            username: 'Test',
        },
        {
            id: '5993aaa0-1ea9-42c9-af35-b76aef9c9380',
            email: 'asdf@asdf.com',
            username: 'asdf',
        },
    ]
    const [users, setUsers] = useState(demo)
    const navigation = useNavigation()
    const renderUsers = ({ item }) => {
        let { email, username } = item
        return (
            <View style={{ padding: 10 }}>
                <Text style={Style.heading}>{email}</Text>
                <Text>{username}</Text>
            </View>
        )
    }
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <ActivityIndicator animating={true} />
            <FlatList
                style={{ flex: 1, width: '100%' }}
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={renderUsers}
            />
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginBottom: 10,
                }}>
                <Button
                    title={'Update'}
                    onPress={() => {
                        navigation.push('Update')
                    }}
                />
                <Button title={'Logout'} onPress={() => {}} />
            </View>
        </View>
    )
}
export default Home
