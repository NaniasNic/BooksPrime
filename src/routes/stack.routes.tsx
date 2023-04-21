import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/home";
import { Detail } from "../screens/detail";
import { Search } from "../screens/search";

export function NativeStack() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen 
                name="home"
                component={Home}
            />

            <Screen 
                name="detail"
                component={Detail}
                options={{
                    title: 'Detalhes do Livro'
                }}
            />

            <Screen 
                name="search"
                component={Search}
                options={{
                    title: 'Veja o que encontramos'
                }}
            />
        </Navigator>
    )
}