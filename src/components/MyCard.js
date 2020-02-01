import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Card, ListItem, Button, Icon, Image, } from 'react-native-elements'


const TD = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/400px-Toronto-Dominion_Bank_logo.svg.png"
const SCOTIABANK = "https://www.underconsideration.com/brandnew/archives/scotiabank_icon.png"
const RBC = "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/1200px-RBC_Royal_Bank.svg.png"
const BMO = "https://static.wixstatic.com/media/8d4aeb_de259a0bec09405cb391f1962a16368d~mv2.png/v1/fill/w_400,h_400,al_c,q_90/file.jpg"
const CIBC = "https://upload.wikimedia.org/wikipedia/en/c/cf/CIBC_logo.svg"


export const MyCard = ({ name, confidence, quote, onSelect, selected }) => {
    let URI;

    switch (name) {
        case "TD BANK":
            URI = TD
            break;
        case "SCOTIABANK":
            URI = SCOTIABANK
            break;
        case "RBC":
            URI = RBC
            break;
        case "BMO":
            URI = BMO
            break;
        case "CIBC":
            URI = CIBC
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



