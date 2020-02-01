import React, { useState } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Constants from 'expo-constants';
import screensStyles from '../styles/ScreensStyles';
import { MyCard } from '../components/MyCard';

const Results = (props) => {

    const [companies, setCompanies] = useState([
        {
            name: 'Poop',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            confidence: '88',
            quote: '230'
        },
        {
            name: 'Poop',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            confidence: '88',
            quote: '230'
        },
        {
            name: 'Poop',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            confidence: '88',
            quote: '230'
        },
        {
            name: 'Poop',
            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            confidence: '88',
            quote: '230'
        },
    ])

    const { navigate } = props.navigation

    return (
        <>
            <View style={screensStyles.ScreenWrapper}>

                <View style={screensStyles.ScreenMainPage}>

                    <Text style={{ color: 'white', fontSize: 40, textAlign: 'center', padding: 20 }} >Results</Text>
                    <View style={[screensStyles.ScreenButtom, { alignItems: 'center' }]}>
                        <View style={{ flex: 1 }}>

                            <SafeAreaView style={{ width: 400 }}>
                                <FlatList
                                    data={companies}
                                    renderItem={({ item }) => <MyCard name={item.name} confidence={item.confidence} quote={item.quote} />}
                                    keyExtractor={item => item.id}
                                />
                            </SafeAreaView>

                        </View>
                        <TouchableOpacity
                            style={[screensStyles.Button, { backgroundColor: 'rgb(14,198,221)', marginBottom: 30, marginTop: 30 }]}
                            title="Submit"
                            onPress={() => { navigate("LandingPage") }}>
                            <Text>Re-calculate</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    statusBar: {
        height: Constants.statusBarHeight,
    },
});

export default Results

