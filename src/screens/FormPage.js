import React from 'react'
import { View, Text, Button } from 'react-native'


const sendData = (navigate) => {
    navigate("Results")
}

const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    return (
        <View style={{ flex: 6 }}>
            <Text style={{ flex: 5 }}>FormPage</Text>
            <Button
                style={{}}
                title="Submit"
                onPress={() => sendData(navigate)}>
            </Button>
        </View>
    )
}

export default FormPage
