import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const ScreenLayout = StyleSheet.create({
    ScreenWrapper: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(14,198,221)'
    },
    ScreenMainPage: {
        flex: 5,
    },
    ScreenButtom: {
        flex: 2,
    },
    Button: {
        width: 200,
        height: 50,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    ButtonText: {
        alignItems: 'center',

    },
    statusBar: {
        height: Constants.statusBarHeight,
    },
});

export default ScreenLayout;

