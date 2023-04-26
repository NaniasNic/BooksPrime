import React, { useState, useEffect } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";

import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BooksList } from "../../components/BooksList";
import { styles } from "./styles";

import { NotFound } from "../../components/NotFound";

type Book = {
    id: string;
    book_cover: string;
    gender: {id?: string, name?: string}[];
    name: string;
    author: string;
};

type SearchResult = {
    input: string;
    result: Book[];
};

export function Search() {
    const route = useRoute<RouteProp<Record<string, SearchResult>, string>>();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={route.params?.searchResult.result}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <BooksList data={item} />}
                ListEmptyComponent={() => <NotFound  title="Livro não encontrado!" />}
            />
        </SafeAreaView>
    )
}