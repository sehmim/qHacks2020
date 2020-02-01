import React, { useEffect, useState } from 'react'
import styles from '../styles/ScreensStyles';
import { Input } from 'react-native-elements';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Picker, KeyboardAvoidingView } from 'react-native'
import Constants from 'expo-constants';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import screensStyles from '../styles/ScreensStyles';


const sendData = (navigate, vehicleInfo, vehicleDistance, age, location, isUsed) => {
    let inputData = {
        vehicleInfo,
        vehicleDistance,
        age,
        location,
        isUsed: 1 ? "Used" : "New"
    }
    navigate("Results")
}

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


    const renderInput = (idIndex) => {
        switch (idIndex) {
            case 1:
                return (
                    <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
                        <Input
                            placeholder='Honda'
                            onChangeText={(text) => setMake(text)}
                            value={make}
                            onSubmitEditing={() => setIdIndex(idIndex++)}
                        />
                    </View>
                )
                break;
            // case 2:
            //     return (
            //         <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
            //             <Input
            //                 placeholder='Civic'
            //                 onChangeText={(text) => setModel(text)}
            //                 value={model}
            //                 onSubmitEditing={() => setIdIndex(idIndex++)}
            //             />
            //         </View>
            //     )
            //     break;
            // case 3:
            //     return (<View style={[styles.FormPageInput, { alignItems: 'center' }]}>
            //         <Input
            //             placeholder='40,000km'
            //             onChangeText={(text) => setVehicleDistance(text)}
            //             value={vehicleInfo}
            //             onSubmitEditing={() => setIdIndex(idIndex++)}
            //         />
            //     </View>

            //     )
            //     break;
            // case 4:
            //     return (
            //         <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
            //             <Input
            //                 placeholder='Toronto'
            //                 onChangeText={(text) => setLocation(text)}
            //                 value={location}
            //                 onSubmitEditing={() => setIdIndex(idIndex++)}
            //             />
            //         </View>
            //     )
            //     break;
            // case 5:
            //     return (
            //         <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
            //             <Input
            //                 placeholder='Driver Age'
            //                 onChangeText={(text) => setAge(text)}
            //                 value={vehicleInfo}
            //                 onSubmitEditing={() => setIdIndex(idIndex++)}
            //             />
            //         </View>
            //     )
            //     break;
            // case 6:
            //     return (
            //         <View style={[styles.FormPageInput, { alignItems: 'center' }]}>
            //             <RadioForm
            //                 radio_props={radio_props}
            //                 initial={0}
            //                 onPress={(value) => {
            //                     setIsUsed(value)
            //                 }}
            //             />
            //         </View>
            //     )
            //     break;

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
                {renderInput(idIndex)}
                {/* <View style={styles.FormPageInput}>
                    <Input
                        placeholder='Age'
                        onChangeText={(text) => setAge(text)}
                        value={age} />
                </View>
                <View style={styles.FormPageInput}>
                    <Input
                        placeholder='Toronto'
                        onChangeText={(text) => setLocation(text)}
                        value={location}
                    />
                </View>
                <View style={styles.FormPageInput}>
                    <Input
                        placeholder="100,000km"
                        onChangeText={(text) => setVehicleDistance(text)}
                        value={vehicleDistance}
                    />
                </View> */}
            </View>
        </>
        // <View style={styles.container}>
        //     <View style={styles.statusBar} />

        //     <View style={{ padding: 15, margin: 10, borderWidth: 2, borderColor: 'white', borderBottomColor: 'black', borderRadius: 10 }}>
        //         <Text style={{ color: 'white', fontSize: 40, textAlign: 'center', borderWidth: 2, borderBottomColor: 'white', borderRadius: 20 }} >Info</Text>
        //         <KeyboardAvoidingView>
        //             <Text style={{ color: 'white', paddingTop: 20 }}>Vehicle year, Make and Model: </Text>
        //             <TextInput
        //                 style={{ height: 30, color: 'white', fontSize: 20 }}
        //                 placeholder="2010"
        //                 onChangeText={(text) => setVehicleInfo(text)}
        //                 value={vehicleInfo}
        //             />
        //         </KeyboardAvoidingView>
        //         <Text style={{ color: 'white', paddingTop: 15 }}>Driver Age: </Text>
        //         <TextInput
        //             style={{ height: 30, color: 'white', fontSize: 20 }}
        //             placeholder="69"
        //             onChangeText={(text) => setAge(text)}
        //             value={age}
        //         />
        //         <Text style={{ color: 'white', paddingTop: 15 }}>City: </Text>
        //         <TextInput
        //             style={{ height: 30, color: 'white', fontSize: 20 }}
        //             placeholder="Toronto"
        //             onChangeText={(text) => setLocation(text)}
        //             value={location}
        //         />
        //         <KeyboardAvoidingView behavior="padding" enabled>

        //             <Text style={{ color: 'white', paddingTop: 15 }}>Driving Distance: </Text>
        //             <TextInput
        //                 style={{ height: 30, color: 'white', fontSize: 20 }}
        //                 placeholder="100,000km"
        //                 onChangeText={(text) => setVehicleDistance(text)}
        //                 value={vehicleDistance}
        //             />
        //         </KeyboardAvoidingView>
        //         <Text style={{ color: 'white', paddingTop: 15, paddingBottom: 10 }}>Vehicle condition when purchased: </Text>
        //         <RadioForm
        //             radio_props={radio_props}
        //             initial={0}
        //             onPress={(value) => { setIsUsed(value) }}
        //         />
        //         <View style={{ alignItems: 'center' }}>
        //             <TouchableOpacity
        //                 style={[screensStyles.Button, { backgroundColor: 'rgb(14,198,221)' }]}
        //                 title="Submit"
        //                 onPress={() => sendData(navigate, vehicleInfo, vehicleDistance, age, location, isUsed)}>
        //                 <Text>Submit</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </View >
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