import { StyleSheet } from 'react-native';

const ScreenLayout = StyleSheet.create({
    ScreenWrapper: {
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
        alignItems: 'center'
    },
    ButtonText: {
        alignItems: 'center',
    }
});

export default ScreenLayout;

