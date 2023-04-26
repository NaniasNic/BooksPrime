import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#090d12',
        paddingStart: 14,
        paddingEnd: 14
    },
    title: {
        color: '#FFFFFF',
        fontSize: 20
    },
    searchContainer: {
        backgroundColor: "rgba(124, 124, 124, 0.17)",
        borderColor: '#ECECEC',
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchInput: {
        width: '90%',
        maxWidth: '90%',
        height: 54,
        color: '#FFF'
    },
    notFoundText: {
        color: '#FFF'
    }
});