import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ScreensStyles from '../styles/ScreensStyles';
import Constants from 'expo-constants';

const TD = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/400px-Toronto-Dominion_Bank_logo.svg.png"
const SCOTIABANK = "https://www.underconsideration.com/brandnew/archives/scotiabank_icon.png"
const RBC = "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/RBC_Royal_Bank.svg/1200px-RBC_Royal_Bank.svg.png"
const BMO = "https://static.wixstatic.com/media/8d4aeb_de259a0bec09405cb391f1962a16368d~mv2.png/v1/fill/w_400,h_400,al_c,q_90/file.jpg"
const CIBC = "https://upload.wikimedia.org/wikipedia/en/c/cf/CIBC_logo.svg"

const ViewScreen = (props) => {
    const { navigation } = props;

    const name = JSON.stringify(navigation.getParam('name', 'NO-Data'))
    const confidence = JSON.stringify(navigation.getParam('confidence', 'NO-Data'))
    const quote = JSON.stringify(navigation.getParam('quote', 'NO-Data'))
    const uri = JSON.stringify(navigation.getParam('uri', 'NO-Data'))


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

            <Text style={{ fontSize: 40 }} >{name.replace(/['"]+/g, '')}</Text>
            <Image
                style={{ width: 380, height: 300, margin: 10 }}
                resizeMode="cover"
                source={{ uri: URI }}
            />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ fontSize: 20, margin: 5, fontFamily: 'Iowan Old Style' }}>Quote: {quote.replace(/['"]+/g, '')}</Text>
                <Text style={{ fontSize: 20, margin: 5 }}>Probability: {confidence.replace(/['"]+/g, '')}</Text>
                <TouchableOpacity style={styles.Button} onPress={() => alert("TO DO CALL")}>
                    <Image
                        style={{ width: 90, height: 70, padding: 50, margin: 10, borderWidth: 1, borderColor: 'white', borderRadius: 80 }}
                        resizeMode="cover"
                        source={{ uri: "https://images.vexels.com/media/users/3/135224/isolated/preview/ebc7e96c8c415344f98bfbacf964cb69-stroke-phone-call-sign-by-vexels.png" }}
                    />
                </TouchableOpacity>
            </View>

            <View>
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
