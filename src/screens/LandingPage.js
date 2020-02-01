import React from 'react'
import styles from '../styles/ScreensStyles';
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

    const { navigate } = props.navigation;

    return (
        <>
            <View style={styles.StartScreenBackground}>
            </View>
            <View style={styles.ScreenWrapper}>
                <View style={styles.ScreenMainPage}>
                    <View style={{}}>
                        <Text>loool</Text>
                    </View>
                </View>
                <View style={styles.ScreenButtom}>
                    <TouchableOpacity style={styles.Button} onPress={() => navigate('Form')}>
                        <Text style={styles.ButtonText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default LandingPage