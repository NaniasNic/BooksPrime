import { View, Text, TouchableOpacity, Image, ImageSourcePropType, ScrollView, Pressable } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { BooksGender } from "../BooksGender";

interface book {
    data: {
        name: string;
        book_cover: ImageSourcePropType;
        gender: {id?: string, name?: string}[];
        author: string;
    }
}

export function BooksList({ data }: book) {
    const navigation = useNavigation();

    function handleNavigation() {
        navigation.navigate('detail', {data: data})
    }

    return (
        <View style={styles.container}>
            <Image 
                source={data.book_cover}
                style={styles.img}
            />
            
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {data.gender.map((item: {id?: string; name?: string;}) => (
                    <BooksGender key={item.id} data={item} />
                ))}
            </ScrollView>
            
            <View style={styles.aboutContainer}>
                <Text style={styles.title} numberOfLines={1}>{data.name}</Text>
                
                <Text style={styles.author}>Author: {data.author}</Text>
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={handleNavigation}
            >
                <Text style={styles.ButtonTitle}>Details</Text>
            </TouchableOpacity>
        </View>
    )
}