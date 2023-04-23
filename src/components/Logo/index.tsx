import { View, Text } from "react-native";

import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons";

export function Logo() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Books Prime</Text>

            <Entypo name="book" color="#FFF" size={28} />
        </View>
    )
}