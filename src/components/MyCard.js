import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Icon, Image, } from 'react-native-elements'


const TD = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/400px-Toronto-Dominion_Bank_logo.svg.png"
const SCOTIABANK = "https://www.underconsideration.com/brandnew/archives/scotiabank_icon.png"
const AVIVA = "https://london.theaisummit.com/wp-content/uploads/2018/05/Lead-Data-Scientist-Aviva.png"
const CAA = "https://nicolinsurance.com/wp-content/uploads/2019/08/Logo-CAA-2019.jpg"
const INTACT = "https://pbs.twimg.com/profile_images/612975163240398848/hBYzphKX.jpg"


export const MyCard = ({ name, confidence, quote, onSelect, selected }) => {
    let URI;

    switch (name) {
        case "TD BANK":
            URI = TD
            break;
        case "SCOTIABANK":
            URI = SCOTIABANK
            break;
        case "AVIVA":
            URI = AVIVA
            break;
        case "CAA":
            URI = CAA
            break;
        case "INTACT":
            URI = INTACT
            break;
        default:
            URI = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fkurtbadenhausen%2Ffiles%2F2018%2F01%2Fbank.jpg";
    }
    return (
        <TouchableOpacity
            onPress={() => onSelect({ name, confidence, quote, selected })}
            style={[
                { backgroundColor: selected ? '' : '#fffff' },
            ]}
        >
            <Card title={name}>
                {
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image
                            style={{ width: 100, height: 100 }}
                            resizeMode="cover"
                            source={{ uri: URI }}
                        />
                        <View style={{ padding: 10 }}>
                            <Text style={{ padding: 10 }}>Estimated Quote: ${quote}</Text>
                            <Text style={{ padding: 10 }}>Possibility: {confidence}%</Text>
                        </View>
                    </View>
                }
            </Card >
        </TouchableOpacity>
    )
}



