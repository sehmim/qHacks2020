import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import Constants from 'expo-constants';


const sendData = (navigate) => {
    navigate("Results")
}

const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    const [isSubmit, setIsSubmit] = React.useState(true)
    const [name, setName] = React.useState('')
    const [car, setCar] = React.useState('')



    return (
        <View style={styles.container}>
            <View style={styles.statusBar} />

            <View style={{ padding: 10 }}>
                <Text style={{ color: 'white', fontSize: 40, textAlign: 'center' }} >Info</Text>
                <Text style={{ color: 'white' }}>Full Name: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="John Doe"
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <Text style={{ color: 'white' }}>Car Type: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="Honda Civic"
                    onChangeText={(text) => setCar(text)}
                    value={car}
                />
            </View>
            <TouchableOpacity
                title="Submit"
                onPress={() => sendData(navigate)}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: 'rgb(14,198,221)',
    },
    statusBar: {
        height: Constants.statusBarHeight,
    },
});
export default FormPage