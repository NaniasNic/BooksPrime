import { StyleSheet, PixelRatio } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1C2024',
        flex: 1,
        paddingStart: 14,
        paddingEnd: 14,
    },
    imgContainer: {
        alignItems: 'center'
    },
    bookCover: {
        height: PixelRatio.getPixelSizeForLayoutSize(130),
        width: PixelRatio.getPixelSizeForLayoutSize(90),
        marginTop: 24
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ECECEC',
        marginBottom: 14,
        marginTop: 14
    },
    author: {
        fontSize: 18,
        color: '#ECECEC',
        marginBottom: 8
    },
    details: {
        marginTop: 20,
        marginBottom: 20,
        color: '#ECECEC',
        fontSize: 16,
        textAlign: 'justify'
    }
})