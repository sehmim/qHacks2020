import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native'
import ScreensStyles from '../styles/ScreensStyles';
import Constants from 'expo-constants';

const TD = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/400px-Toronto-Dominion_Bank_logo.svg.png"
const SCOTIABANK = "https://www.underconsideration.com/brandnew/archives/scotiabank_icon.png"
const RBC = "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/1200px-RBC_Royal_Bank.svg.png"
const BMO = "https://static.wixstatic.com/media/8d4aeb_de259a0bec09405cb391f1962a16368d~mv2.png/v1/fill/w_400,h_400,al_c,q_90/file.jpg"
const CIBC = "https://upload.wikimedia.org/wikipedia/en/c/cf/CIBC_logo.svg"


const data = [
    {
        name: "Seoul",
        population: 21500000,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Toronto",
        population: 2800000,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Beijing",
        population: 527612,
        color: "red",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "New York",
        population: 8538000,
        color: "#ffffff",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Moscow",
        population: 11920000,
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
];

const ViewScreen = (props) => {

    const { navigation } = props;

    const name = JSON.stringify(navigation.getParam('name', 'NO-Data'))
    const confidence = JSON.stringify(navigation.getParam('confidence', 'NO-Data'))
    const quote = JSON.stringify(navigation.getParam('quote', 'NO-Data'))


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
            break
    }

    return (
        <View style={ScreensStyles.ScreenWrapper}>
            {/* <View style={styles.statusBar} /> */}

            <Text style={{ fontSize: 40, marginBottom: 60 }} >{name.replace(/^"|"$/g, '')}</Text>
            <Image source={require('../styles/money.png')} style={{ width: 300, height: "28%", marginTop: 50, marginBottom: 20 }} />
            <View style={{ flexDirection: 'column' }}>
                <View style={{flexDirection: "row", marginTop: 70}}>
                    <Text style={{ fontSize: 20, margin: 5 }}>Quote: ${parseFloat(quote.replace(/^"|"$/g, '')).toFixed(2)}</Text>
                    <Text style={{ fontSize: 20, margin: 5 }}>Probability: {parseFloat(confidence.replace(/^"|"$/g, '')).toFixed(2) * 100}%</Text>
                </View>
                <TouchableOpacity style={styles.Button, {marginTop: 20, marginLeft: 85}} onPress={() => Linking.openURL(`tel:6479119111`)
                }>
                    <Image
                        style={{ width: 90, height: 70, padding: 50, margin: 10, borderWidth: 1, borderColor: 'black', borderRadius: 80 }}
                        resizeMode="cover"
                        source={{ uri: "https://images.vexels.com/media/users/3/135224/isolated/preview/ebc7e96c8c415344f98bfbacf964cb69-stroke-phone-call-sign-by-vexels.png" }}
                    />

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    statusBar: {
        height: Constants.statusBarHeight,
    },
    Button: {

    }

});

export default ViewScreen
