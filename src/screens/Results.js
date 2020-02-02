import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import Constants from 'expo-constants';
import screensStyles from '../styles/ScreensStyles';
import { MyCard } from '../components/MyCard';
import axios from 'axios';

const BANKS = [
    {
        id: '1',
        name: 'TD BANK',
        confidence: '88',
        quote: '1'
    },
    {
        id: '2',
        name: 'AVIVA',
        confidence: '88',
        quote: '2'
    },
    {
        id: '3',
        name: 'SCOTIABANK',
        confidence: '88',
        quote: '3'
    },
    {
        id: '4',
        name: 'SUNLIFE',
        confidence: '88',
        quote: '4'
    },
    {
        id: '5',
        name: 'INTACT',
        confidence: '88',
        quote: '1'
    },
]



const Results = (props) => {


    const { navigate } = props.navigation

    const payload = JSON.stringify(props.navigation.getParam('inputData', 'NO-Data'))

    const [dataFromServer, setDataFromServer] = useState({ data: null, loading: true })
    const baseURL = 'https://insurance-flask.appspot.com/postjson';

    useEffect(() => {
        axios.post(baseURL, payload).then((res) => {
            const newData = res.data.sort((a, b) => {
                var x = a.quote; var y = b.quote;
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });;
            setDataFromServer({ data: newData, loading: false })

        })
    }, [])

    const onSelect = React.useCallback(({ name, confidence, quote, onSelect, selected, uri }) => {
        navigate('ViewScreen', { name, confidence, quote, uri })
    }, [])

    return (
        dataFromServer.loading ? <View><Text>Loading..... </Text></View> :

            <>
                <View style={screensStyles.ScreenWrapper}>

                    <View style={screensStyles.ScreenMainPage}>

                        <Text style={{ fontSize: 40, textAlign: 'center', padding: 20, marginTop: 20 }} >Results</Text>
                        <View style={[screensStyles.ScreenButtom, { alignItems: 'center' }]}>
                            <View style={{ flex: 1 }}>
                                <SafeAreaView style={{ width: 400 }}>
                                    <FlatList
                                        data={dataFromServer.data}
                                        renderItem={({ item }) =>
                                            <MyCard
                                                uri={item.uri}
                                                name={item.name}
                                                confidence={item.confidence}
                                                quote={item.quote}
                                                onSelect={onSelect}
                                                selected={item.selected}
                                            />}
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

