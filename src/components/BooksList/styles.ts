import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(124, 124, 124, 0.17)",
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 14,
        paddingBottom: 14,
        paddingStart: 14,
        paddingEnd: 14,
        borderRadius: 16,
    },
    img: {
        height: 400,
        width: 250,
        resizeMode: 'cover'
    },
    aboutContainer: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginTop: 8,
        marginBottom: 8,
        color: '#ECECEC'
    },
    author: {
        fontSize: 16,
        color: '#ECECEC'
    },
    button: {
        backgroundColor: '#000',
        width: 150,
        height: 54,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    ButtonTitle: {
        color: '#ECECEC',
        fontSize: 18,
        fontWeight: '700'
    }
});