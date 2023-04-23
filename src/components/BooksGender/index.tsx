import { View, Text } from "react-native";
import { styles } from "./styles";

interface gender {
    data: {
        id?: string;
        name?: string;
    }
}

export function BooksGender({ data }: gender) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{data.name}</Text>
        </View>
    )
}