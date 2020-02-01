import React from 'react'
import { View, Text, Button } from 'react-native'

const Results = (props) => {

    const { navigate } = props.navigation

    return (
        <View style={{ flex: 6 }}>
            <Text style={{ flex: 5 }}>Results</Text>
            <Button
                title="Re-calculate"
                onPress={() => { navigate("LandingPage") }}
            ></Button>
        </View>
    )
}

export default Results

