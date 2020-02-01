import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, Picker } from 'react-native'

import Constants from 'expo-constants';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import screensStyles from '../styles/ScreensStyles';


let radio_props = [
    { label: 'New', value: 0 },
    { label: 'Used', value: 1 }
];


const sendData = (navigate) => {
    navigate("Results")
}

const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    const [isSubmit, setIsSubmit] = React.useState(true)

    const [carMake, setCarMake] = React.useState('')
    const [year, setYear] = React.useState('')
    const [model, setModel] = React.useState('')

    const [isUsed, setIsUsed] = React.useState('')




    return (
        <View style={styles.container}>
            <View style={styles.statusBar} />

            <View style={{ padding: 15, margin: 10, borderWidth: 2, borderColor: 'white', borderBottomColor: 'black', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 40, textAlign: 'center', borderWidth: 2, borderBottomColor: 'white', borderRadius: 20 }} >Info</Text>
                <Text style={{ color: 'white', paddingTop: 20 }}>Vehicle year: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="2010"
                    onChangeText={(text) => setYear(text)}
                    value={year}
                />
                <Text style={{ color: 'white', paddingTop: 15 }}>Vehicle make: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="Honda"
                    onChangeText={(text) => setCarMake(text)}
                    value={carMake}
                />
                <Text style={{ color: 'white', paddingTop: 15 }}>Vehicle model: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="Civic"
                    onChangeText={(text) => setCarMake(setModel)}
                    value={model}
                />
                <Text style={{ color: 'white', paddingTop: 15, paddingBottom: 10 }}>Vehicle condition when purchased: </Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => { setIsUsed(value) }}
                />
                <Text style={{ color: 'white', paddingTop: 15 }}>Driving Distance: </Text>
                <TextInput
                    style={{ height: 30, color: 'white', fontSize: 20 }}
                    placeholder="100,000km"
                    onChangeText={(text) => setCarMake(setModel)}
                    value={model}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={[screensStyles.Button, { backgroundColor: 'rgb(14,198,221)' }]}
                        title="Submit"
                        onPress={() => sendData(navigate)}>
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