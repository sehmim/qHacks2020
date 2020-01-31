import React from 'react'
import { View, Text } from 'react-native'

import { firebaseConfig } from '@/Firebaseconfig'

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


const Dashboard = () => {
    return (
        <View>
            <Text>Dashboard</Text>
        </View>
    )
}

export default Dashboard
