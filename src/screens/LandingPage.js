import React from 'react';
import styles from '../styles/ScreensStyles';
// import Svg, {Circle, Rect} from 'react-native-svg';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native'


const LandingPage = (props) => {

    const [isLoading, setIsLoading] = React.useState(true)
    const { navigate } = props.navigation;


    setTimeout(() => { setIsLoading(false); }, 1000);

    return (
        <>
            <View style={styles.StartScreenBackground}>
            </View>
            <View style={styles.ScreenWrapper}>
                {
                    isLoading ?
                        <></>
                        :
                        <>

                            <Image source={require('../styles/logo.png')} style={{ position: "absolute", top: "15%", width:250, height: 70}}></Image>

                            <Image source={require('../styles/car.png')} style={{ width: Platform.OS === "android" ? "83%" : "95%", height: "30%", position: "absolute", top: "35%" }} />
                            <View style={styles.ScreenMainPage}>
                            </View>
                            <View style={styles.ScreenButtom}>
                                <TouchableOpacity style={styles.Button} onPress={() => navigate('Form')}>
                                    <Text style={styles.ButtonText}>Get Started</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                }
            </View>
        </>
    )
}

export default LandingPage
