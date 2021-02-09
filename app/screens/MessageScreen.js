import React, { useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: "Title1",
        description: "Description1",
        image: require('../assets/bmx.jpg')
    },
    {
        id: 2,
        title: "Title2",
        description: "Description2",
        image: require('../assets/bmx.jpg')
    }
]

const MessageScreen = () => {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message Selected', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => setMessages([{
                    id: 2,
                    title: "Title2",
                    description: "Description2",
                    image: require('../assets/bmx.jpg')
                }])}
            />

        </Screen>
    )
}

const styles = StyleSheet.create({

})

export default MessageScreen
