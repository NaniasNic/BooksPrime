import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import { getFavorites } from "../../utils/storage";
import { useIsFocused } from "@react-navigation/native";
import { BooksList } from "../../components/BooksList";
import { NotFound } from "../../components/NotFound";

export function Favorites() {
    const [books, setBooks] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        let isActive = true;

        async function getBooks() {
            const result = await getFavorites("@appbook");
            if(isActive) {
                setBooks(result);
            };
        };

        if(isActive) {
            getBooks();
        };

        return () => {
            isActive = false
        };
    }, [isFocused])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Livros Favoritos</Text>

            {books.length === 0 && (
                <NotFound title="Você ainda não tem nenhum livro salvo!" />
            )}

            <FlatList 
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 14 }}
                data={books}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <BooksList data={item} />}
            />
        </SafeAreaView>
    )
}