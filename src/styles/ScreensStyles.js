import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const ScreenLayout = StyleSheet.create({
    StartScreenBackground: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        backgroundColor: "#70CE9B",
        height: "100%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    ScreenWrapper: {
        position: "relative",
        zIndex: 2,
        flex: 7,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontFamily: 'monospace'
    },
    statusBar: {
        height: Constants.statusBarHeight,
    },
    FormPageContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    FormPageInput: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        height: 50,
    }
});

export default ScreenLayout;

