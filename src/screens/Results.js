import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Constants from 'expo-constants';
import screensStyles from '../styles/ScreensStyles';
import { MyCard } from '../components/MyCard';

const BANKS = [
    {
        name: 'TD BANK',
        confidence: '88',
        quote: '1'
    },
    {
        name: 'CIBC',
        confidence: '88',
        quote: '2'
    },
    {
        name: 'SCOTIABANK',
        confidence: '88',
        quote: '3'
    },
    {
        name: 'BMO',
        confidence: '88',
        quote: '4'
    },
    {
        name: 'RBC',
        confidence: '88',
        quote: '1'
    },
]

const Results = (props) => {

    BANKS.sort((a, b) => {
        var x = a.quote; var y = b.quote;
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });



    const { navigate } = props.navigation
    const onSelect = React.useCallback(({ name, confidence, quote, onSelect, selected, uri }) => {
        navigate('ViewScreen', { name, confidence, quote, uri })
    }, [])

    return (
        <>
            <View style={screensStyles.ScreenWrapper}>
                {/* <View style={styles.statusBar} /> */}

                <View style={screensStyles.ScreenMainPage}>

                    <Text style={{ color: 'white', fontSize: 40, textAlign: 'center', padding: 20 }} >Results</Text>
                    <View style={[screensStyles.ScreenButtom, { alignItems: 'center' }]}>
                        <View style={{ flex: 1 }}>

                            <SafeAreaView style={{ width: 400 }}>
                                <FlatList
                                    data={BANKS}
                                    renderItem={({ item }) =>
                                        <MyCard
                                            uri={item.uri}
                                            name={item.name}
                                            confidence={item.confidence}
                                            quote={item.quote}
                                            onSelect={onSelect}
                                            selected={item.selected}
                                        />}
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

