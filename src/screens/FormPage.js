import React, { useEffect, useState } from 'react';
import inputs from '../services/inputs';
import styles from '../styles/ScreensStyles';
import { Input } from 'react-native-elements';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Picker, KeyboardAvoidingView, Image, Platform } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import screensStyles from '../styles/ScreensStyles';

const Imgs = [
    '',
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/access_account_99n5.svg',
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/thought_process_67my.svg',
    'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/forgot_password_gi2d.svg'
]

const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    const [isSubmit, setIsSubmit] = useState(true)

    const [data, setData] = useState({});

    const [isUsed, setIsUsed] = useState('')
    const [gender, setGender] = useState('')
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

    const sendData = () => {
        handleSendData(make, model, vehicleDistance, age, year, gender, location, isUsed);
    }

    const handleSendData = async (make, model, vehicleDistance, age, year, gender, location, isUsed) => {
        try {
            const inputData = {
                gender,
                age,
                city: location,
                year,
                make,
                model,
                new_used: isUsed ? "New" : "Used",
                dist: vehicleDistance,

            }
            const newData = await inputs.postInputs(inputData);
            setData(newData);
            console.log('newData', newData);
            console.log("inputs", data);
            navigate("Results");

        }
        catch (ex) {
            console.log(ex);
        }
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

    const handleYearChange = (currentYear) => {
        setYear(currentYear);
    }

    const handleGenderChange = (currentGender) => {
        setGender(currentGender);
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
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/make.png')} style={{ width: Platform.OS === "android" ? "83%" : 300, height: "28%", position: "absolute", top: "15%" }} />
                        <View>
                            <Text style={styles.formLabel}>Make: </Text>
                            <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                                <Input
                                    placeholder='Honda'
                                    autoFocus={true}
                                    onChangeText={(text) => handleMakeChange(text)}
                                    value={make}
                                    onSubmitEditing={() => handleSubmit(idIndex)}
                                />
                            </View>
                        </View>
                    </View>
                )
            case 2:
                return (
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/model.png')} style={{ width: Platform.OS === "android" ? "83%" : "100%", height: "19%", position: "absolute", top: "20%" }} />
                        <View>
                            <Text style={styles.formLabel}>Model: </Text>
                            <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                                <Input
                                    placeholder='Civic'
                                    autoFocus={true}
                                    onChangeText={(text) => handleModelChange(text)}
                                    value={model}
                                    onSubmitEditing={() => handleSubmit(idIndex)}
                                />
                            </View>
                        </View>
                    </View>
                )

            case 3:
                return (
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/model.png')} style={{ width: Platform.OS === "android" ? "83%" : "100%", height: "19%", position: "absolute", top: "20%" }} />
                        <View>
                            <Text style={styles.formLabel}>Year: </Text>
                            <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                                <Input
                                    placeholder='Year'
                                    autoFocus={true}
                                    onChangeText={(text) => handleYearChange(text)}
                                    value={year}
                                    onSubmitEditing={() => handleSubmit(idIndex)}
                                />
                            </View>
                        </View>
                    </View>
                )
            case 4:
                return (
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/distance.png')} style={{ width: Platform.OS === "android" ? "83%" : "100%", height: "19%", position: "absolute", top: "20%" }} />
                        <Text style={styles.formLabel}>Distance travelled: </Text>
                        <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                            <Input
                                placeholder='40,000km'
                                autoFocus={true}
                                onChangeText={(text) => handleAverageDistanceChange(text)}
                                value={vehicleDistance}
                                onSubmitEditing={() => handleSubmit(idIndex)}
                            />
                        </View>
                    </View>
                )
            case 5:
                return (
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/location.png')} style={{ width: Platform.OS === "android" ? "83%" : "100%", height: "30%", position: "absolute", top: "15%" }} />
                        <Text style={styles.formLabel}>Location: </Text>
                        <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                            <Input
                                placeholder='Toronto'
                                autoFocus={true}
                                onChangeText={(text) => handleLocationChange(text)}
                                value={location}
                                onSubmitEditing={() => handleSubmit(idIndex)}
                            />
                        </View>
                    </View>
                )
            case 6:
                return (
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/age.png')} style={{ width: Platform.OS === "android" ? "83%" : "100%", height: "35%", position: "absolute", top: "8%" }} />
                        <Text style={styles.formLabel}>Age: </Text>
                        <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                            <Input
                                placeholder='Driver Age'
                                autoFocus={true}
                                onChangeText={(text) => handleAgeChange(text)}
                                value={age}
                                onSubmitEditing={() => handleSubmit(idIndex)}
                            />
                        </View>
                    </View>
                )
            case 7:
                return (
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/age.png')} style={{ width: Platform.OS === "android" ? "83%" : "100%", height: "35%", position: "absolute", top: "8%" }} />
                        <Text style={styles.formLabel}>Gender: </Text>
                        <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                            <Input
                                placeholder='Gender'
                                autoFocus={true}
                                onChangeText={(text) => handleGenderChange(text)}
                                value={gender}
                                onSubmitEditing={() => handleSubmit(idIndex)}
                            />
                        </View>
                    </View>
                )
            case 8:
                return (
                    <View style={styles.ScreenWrapper}>
                        <Image source={require('../styles/is_used.png')} style={{ width: Platform.OS === "android" ? "83%" : 300, height: "19%", position: "absolute", top: "15%" }} />
                        <Text style={styles.formLabel}>Condition of your car: </Text>
                        <RadioForm
                            style={styles.RadioButton}
                            radio_props={radio_props}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => {
                                handleRadioButtons(value)
                            }}
                        />
                        <TouchableOpacity
                            style={[screensStyles.Button, { backgroundColor: 'rgb(14,198,221)' }]}
                            title="Submit"
                            onPress={sendData}>
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    </View>
                )
        }
    }
    return (
        <View style={[styles.FormPageContainer, { alignItems: 'center' }]}>
            <Text>
                Counting {idIndex}/7
                </Text>
            <KeyboardAvoidingView style={{}}>
                {renderInput(idIndex)}
            </KeyboardAvoidingView>
        </View>
    )
}


export default FormPage