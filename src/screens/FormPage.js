import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


const sendData = (navigate) => {
    navigate("Results")
}

const FormPage = ({ navigation }) => {
    const { navigate } = navigation
    return (
        <View style={styles.container}>
            <Text style={{ flex: 5 }}>

            </Text>
            <Button
                style={{}}
                title="Submit"
                onPress={() => sendData(navigate)}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: 'rgb(14,198,221)',
    },
});
export default FormPage

