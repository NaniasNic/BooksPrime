import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/home";
import { Detail } from "../screens/detail";
import { Search } from "../screens/search";

export function NativeStack() {
    return (
        <Navigator>
            <Screen 
                name="home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Screen 
                name="detail"
                component={Detail}
                options={{
                    title: 'Detalhes do Livro',

                    headerStyle: {
                        backgroundColor: '#18181B'
                    },

                    headerTintColor: '#FFF'
                }}
            />

            <Screen 
                name="search"
                component={Search}
                options={{
                    title: 'Veja o que encontramos',
                    
                    headerStyle: {
                        backgroundColor: '#18181B'
                    },

                    headerTintColor: '#FFF'
                }}
            />
        </Navigator>
    )
}