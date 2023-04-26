import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

import { Logo } from "../../components/Logo";
import { BooksList } from "../../components/BooksList";
import { books } from "../../database/books";

import { useNavigation } from "@react-navigation/native";
import { NotFound } from "../../components/NotFound";

export function Home() {
    const [inputValue, setInputValue] = useState("");
    const navigation = useNavigation();

    function handleSearch() {
        if(!inputValue) return;

        const input = inputValue.toLowerCase();
        const result = books.filter((book) => book.name.toLowerCase().includes(input));

        setInputValue("");
        navigation.navigate("search", { searchResult: {input, result} });
    }

    return (
        <SafeAreaView style={styles.container}>
            <Logo />

            <View style={styles.searchContainer}>
                <TextInput 
                    placeholder="Digite o nome do livro..."
                    placeholderTextColor="#ECECEC"
                    style={styles.searchInput}
                    value={inputValue}
                    onChangeText={(text) => setInputValue(text)}
                />

                <TouchableOpacity
                    onPress={handleSearch}
                >
                    <Ionicons 
                        name="search"
                        color="#ECECEC"
                        size={28}
                    />
                </TouchableOpacity>
            </View>

            <FlatList 
                data={books}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <BooksList data={item} />}
                ListEmptyComponent={() => <NotFound title="Não encontramos a lista..." />}
            />
        </SafeAreaView>
    )
}