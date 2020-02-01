import React, { useEffect, useState } from 'react'
import styles from '../styles/ScreensStyles';
import { Input } from 'react-native-elements';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Picker, KeyboardAvoidingView } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import screensStyles from '../styles/ScreensStyles';


const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    const [isSubmit, setIsSubmit] = useState(true)

    const [isUsed, setIsUsed] = useState('')

    const [year, setYear] = useState('')
    const [vehicleDistance, setVehicleDistance] = useState('')

    const [age, setAge] = useState('')

    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
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

    const [idIndex, setIdIndex] = React.useState(1)

    const handleMakeChange = (currentMake) => {
        setMake(currentMake);
    }

    const handleModelChange = (currentModel) => {
        setModel(currentModel);
    }

    const handleAverageDistanceChange = (currentDistance) => {
        setVehicleDistance(currentDistance);
    }

    const handleLocationChange = (currentLocation) => {
        setLocation(currentLocation);
    }

    const handleAgeChange = (currentAge) => {
        setAge(currentAge);
    }

    const handleRadioButtons = (currentOption) => {
        setIsUsed(currentOption ? "New" : "Used");
    }

    const handleSubmit = (currentIndex) => {
        setIdIndex(currentIndex + 1);
    }

    const renderInput = (idIndex) => {
        switch (idIndex) {
            case 1:
                return (
                    <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                        <Input
                            placeholder='Honda'
                            onChangeText={(text) => handleMakeChange(text)}
                            value={make}
                            onSubmitEditing={() => handleSubmit(idIndex)}
                        />
                    </View>
                )
            case 2:
                return (
                    <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                        <Input
                            placeholder='Civic'
                            onChangeText={(text) => handleModelChange(text)}
                            value={model}
                            onSubmitEditing={() => handleSubmit(idIndex)}
                        />
                    </View>
                )
            case 3:
                return (<View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                    <Input
                        placeholder='40,000km'
                        onChangeText={(text) => handleAverageDistanceChange(text)}
                        value={vehicleDistance}
                        onSubmitEditing={() => handleSubmit(idIndex)}
                    />
                </View>

                )
            case 4:
                return (
                    <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                        <Input
                            placeholder='Toronto'
                            onChangeText={(text) => handleLocationChange(text)}
                            value={location}
                            onSubmitEditing={() => handleSubmit(idIndex)}
                        />
                    </View>
                )
            case 5:
                return (
                    <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                        <Input
                            placeholder='Driver Age'
                            onChangeText={(text) => handleAgeChange(text)}
                            value={age}
                            onSubmitEditing={() => handleSubmit(idIndex)}
                        />
                    </View>
                )
            case 6:
                return (
                    <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={0}
                            onPress={(value) => {
                                handleRadioButtons(value)
                            }}
                        />
                        <TouchableOpacity
                            style={[screensStyles.Button, { backgroundColor: 'rgb(14,198,221)' }]}
                            title="Submit"
                            onPress={() => sendData(make, model, vehicleDistance, age, location, isUsed)}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )
            default:
                break;
        }
    }
    return (
        <>
            <View style={[styles.FormPageContainer, { alignItems: 'center', }]}>
                <Text>
                    Counting {idIndex}/7
                </Text>
                <KeyboardAvoidingView>
                    {renderInput(idIndex)}
                </KeyboardAvoidingView>
            </View>
        </>
    )
}

const InputHelper = (setInputHook, input, placeholder) => {
    return (
        <>
            <View style={screensStyles.FormPageInput}>
                <Input
                    placeholder={placeholder}
                    onChangeText={(text) => setInputHook(text)}
                    value={input} />
            </View>
            <View style={{ margin: 10 }}>
                <TouchableOpacity style={styles.Button} onPress={() => navigate('Form')}>
                    <Text style={styles.ButtonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </>)
}

export default FormPage