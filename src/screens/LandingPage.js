import React from 'react'
import styles from '../styles/styles';
import { View, Text, Button } from 'react-native'

import * as firebase from 'firebase';

import { firebaseConfig } from '../../FirebaseConfig.js'

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
            <View style={styles.ScreenWrapper}>
                <View style={styles.ScreenMainPage}>
                    <Text>LandingPage</Text>
                </View>
                <View style={styles.ScreenButtom}>
                    <Button
                        style={{}}
                        title="Get Started"
                        onPress={() => navigate('Form')}>
                    </Button>
                </View>
            </View>
        </>
    )
}

export default LandingPage
