import React from 'react';
import styles from '../styles/ScreensStyles';
// import Svg, {Circle, Rect} from 'react-native-svg';
import { View, Text, TouchableOpacity, Image } from 'react-native'

import * as firebase from 'firebase';
import { firebaseConfig } from '../../FirebaseConfig'


const FIREBASE_CONFIG = {
    apiKey: firebaseConfig.API_KEY,
    authDomain: firebaseConfig.AUTH_DOMAIN,
    databaseURL: firebaseConfig.DATABASE_URL,
    projectId: firebaseConfig.PROJECT_ID,
    storageBucket: firebaseConfig.STORAGE_BUCKET,
    messagingSenderId: firebaseConfig.MESSAGING_SENDER_ID,
    appId: firebaseConfig.APP_ID,
    measurementId: firebaseConfig.MEASUREMENT_ID
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG)
}

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

                            <Text style={{ position: "absolute", top: "15%", left: "37%" }}>Carshurance</Text>

                            <Image source={require('../styles/car.png')} style={{ width: "80%", height: "25%", position: "absolute", top: "35%" }} />
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
