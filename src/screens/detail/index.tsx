import React, { useState, useLayoutEffect } from "react";
import { View, Text, ImageSourcePropType, Image, ScrollView, Pressable, SafeAreaView } from "react-native";

import { styles } from "./styles";
import { BooksGender } from "../../components/BooksGender";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation } from "@react-navigation/native";

import { isFavorites, saveFavorites, removeFavorites } from "../../utils/storage";

interface BooksParams {
    key: string;
    name: string;

    data: {
        name: string;
        book_cover: ImageSourcePropType;
        gender: {id?: string, name?: string}[];
        author: string;
        date: string;
        about: string;
    }
}

interface BookProps {
    route: RouteProp<{Book: BooksParams}, 'Book'>
}

export function Detail({ route }: BookProps) {
    const [favorite, setFavorite] = useState(false);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        async function getStatusFavorites() {
            const bookFavorite = await isFavorites(route.params?.data);
            setFavorite(bookFavorite);
        };

        getStatusFavorites();

        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes do Livro",

            headerRight: () => (
                <Pressable
                    onPress={() => handleFavoriteBook(route.params?.data)}
                >
                    {favorite ? (
                        <Ionicons 
                            name="bookmarks" 
                            color="#fff" 
                            size={28}
                        />  
                    ) : (
                        <Ionicons 
                            name="bookmarks-outline" 
                            color="#FFF" 
                            size={28}
                        />
                    )}
                </Pressable>
            )
        })

    }, [navigation, route.params?.data, favorite])

    async function handleFavoriteBook(book: any) {
        if(favorite) {
            await removeFavorites(book.id);
            setFavorite(false);
        } else {
            await saveFavorites("@appbook", book);
            setFavorite(true)
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={route.params?.data.book_cover}
                    style={styles.bookCover} 
                />
            </View>

            <Text style={styles.title}>{route.params?.data.name}</Text>

            <View>
                <Text style={styles.author}>Author: {route.params?.data.author}</Text>
                <Text style={styles.author}>Release year: {route.params?.data.date}</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {route.params?.data.gender.map((item: {id?: string; name?: string;}) => (
                    <BooksGender key={item.id} data={item} />
                ))}
            </ScrollView>

            <Text style={styles.details}>{route.params?.data.about}</Text>
        </ScrollView>
    )
}