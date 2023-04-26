import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: PixelRatio.getPixelSizeForLayoutSize(55),
        height: PixelRatio.getPixelSizeForLayoutSize(18),
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
        marginTop: 16,
        borderRadius: 8,
        paddingEnd: 8,
        paddingStart: 8
    },
    title: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500'
    }
})