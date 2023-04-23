import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

export function Favorites() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Favorites</Text>
        </SafeAreaView>
    )
}