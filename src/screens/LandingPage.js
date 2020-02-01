import React from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'

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
    const [isLoading, setIsLoading] = React.useState(true);

    setTimeout(() => { setIsLoading(false); }, 4000);


    return (
        <View style={styles.container}>
            {
                isLoading ?
                    <Image
                        style={styles.logo}
                        source={{ uri: 'https://media2.giphy.com/media/kVlXwd6iaE33q/source.gif' }}
                    /> :
                    <>
                        <Text style={[styles.title, shadow]}>CarSurance</Text>
                        <Button
                            title="Get Started"
                            onPress={() => navigate('Form')}>
                        </Button>
                    </>
            }
        </View>
    )
}

const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: 4
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(14,198,221)',
    },
    logo: {
        width: 500,
        height: 400,
    },
    title: {
        color: 'white',
        fontSize: 60,
        padding: 20
    }
});

export default LandingPage
