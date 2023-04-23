import { View, Text } from "react-native";
import { styles } from "./styles";

interface notFound {
    title: string;
}

export function NotFound({ title }: notFound) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>404</Text>

            <Text style={styles.subTitle}>{title}</Text>
        </View>
    )
}