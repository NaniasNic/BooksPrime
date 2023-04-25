import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavorites(key: any) {
    const favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];
};

export async function saveFavorites(key: any, newItem: any) {
    let myFavorites = await getFavorites(key);

    let hasItem = myFavorites.some((item: any) => item.id === newItem.id);

    if(hasItem) {
        console.log("Ja existe nos Favoritos");
        return;
    }

    myFavorites.push(newItem);

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
    console.log("Salvo com sucesso");
};

export async function removeFavorites(id: string) {
    let book = await getFavorites("@appbook");

    let myFavorites = book.filter((item: any) => {
        return (item.id !== id)
    });

    await AsyncStorage.setItem("@appbook", JSON.stringify(myFavorites));
    console.log("Removido com sucesso");

    return myFavorites;
};

export async function isFavorites(book: any) {
    let myBook = await getFavorites("@appbook");

    const favorite = myBook.find((item: any) => item.id === book.id);

    if(favorite) {
        return true;
    };

    return false;
};