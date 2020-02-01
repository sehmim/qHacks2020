import React from 'react'
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


const sendData = (navigate) => {
    navigate("Results")
}

const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    const [isSubmit, setIsSubmit] = React.useState(true)

    return (
        <View style={styles.container}>
            <View style={{ flex: 5 }}>
                <Text style={{ color: 'white' }} ></Text>
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
});
export default FormPage

