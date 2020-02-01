import React from 'react'
import { View, Text } from 'react-native'
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements'


const banks = [
    {
        name: 'Poop',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        confidence: '88',
        quote: '230'
    },
]

export const MyCard = ({ name, confidence, quote }) => {
    return (
        <Card title={name}>
            {
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        resizeMode="cover"
                        source={{ uri: banks[0].avatar }}
                    />
                    <View style={{ padding: 10 }}>
                        <Text style={{ padding: 10 }}>Estimated Quote: ${quote}</Text>
                        <Text style={{ padding: 10 }}>Possibility: {confidence}%</Text>
                    </View>
                </View>
            }
        </Card >
    )
}



