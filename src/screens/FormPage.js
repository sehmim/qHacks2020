import React, {useEffect, useState} from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Picker, KeyboardAvoidingView } from 'react-native'
import Constants from 'expo-constants';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import screensStyles from '../styles/ScreensStyles';

const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    const [isSubmit, setIsSubmit] = useState(true)
    
    const [isUsed, setIsUsed] = useState('')

    const [vehicleInfo, setVehicleInfo] = useState('')
    const [vehicleDistance, setVehicleDistance] = useState('')

    const [age, setAge] = useState('')
    const [location, setLocation] = useState('')

    const radio_props = [
        { label: 'New', value: 0 },
        { label: 'Used', value: 1 }
    ];

    const sendData = (navigate, vehicleInfo, vehicleDistance, age, location, isUsed) => {
        let inputData = {
            vehicleInfo,
            vehicleDistance,
            age,
            location,
            isUsed: 1 ? "Used" : "New"
        }
        console.log("Sedning Data: ", inputData)
        navigate("Results")
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.statusBar} />

            <View style={{ padding: 15, margin: 10, borderWidth: 2, borderColor: 'white', borderBottomColor: 'black', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 40, textAlign: 'center', borderWidth: 2, borderBottomColor: 'white', borderRadius: 20 }} >Info</Text>
                <KeyboardAvoidingView>
                    <Text style={{ color: 'white', paddingTop: 20 }}>Vehicle year, Make and Model: </Text>
                    <TextInput
                        style={{ height: 30, color: 'white', fontSize: 20 }}
                        placeholder="2010"
                        onChangeText={(text) => setVehicleInfo(text)}
                        value={vehicleInfo}
                    />
                </KeyboardAvoidingView>
                <Text style={{ color: 'white', paddingTop: 15 }}>Driver Age: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="69"
                    onChangeText={(text) => setAge(text)}
                    value={age}
                />
                <Text style={{ color: 'white', paddingTop: 15 }}>City: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="Toronto"
                    onChangeText={(text) => setLocation(text)}
                    value={location}
                />
                <KeyboardAvoidingView behavior="padding" enabled>

                    <Text style={{ color: 'white', paddingTop: 15 }}>Driving Distance: </Text>
                    <TextInput
                        style={{ height: 30, color: 'white', fontSize: 20 }}
                        placeholder="100,000km"
                        onChangeText={(text) => setVehicleDistance(text)}
                        value={vehicleDistance}
                    />
                </KeyboardAvoidingView>
                <Text style={{ color: 'white', paddingTop: 15, paddingBottom: 10 }}>Vehicle condition when purchased: </Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => { setIsUsed(value) }}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[screensStyles.Button, { backgroundColor: 'rgb(14,198,221)' }]}
                        title="Submit"
                        onPress={() => sendData(navigate, vehicleInfo, vehicleDistance, age, location, isUsed)}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
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