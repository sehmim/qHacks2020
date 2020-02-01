import React from 'react'
import { View, Text, Button } from 'react-native'

import * as firebase from 'firebase';
import { firebaseConfig } from '../../Firebaseconfig'

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
        <View style={{ flex: 6 }}>
            <Text style={{ flex: 5 }}>LandingPage</Text>
            <Button
                style={{}}
                title="Get Started"
                onPress={() => navigate('Form')}>
            </Button>
        </View>
    )
}

export default LandingPage
