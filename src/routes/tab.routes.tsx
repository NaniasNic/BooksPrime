import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { NativeStack } from "./stack.routes";
import { Favorites } from "../screens/favorites";

import { Ionicons } from "@expo/vector-icons";

export function Tab() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212',

                tabBarStyle: {
                    backgroundColor: '#18181B',
                    borderTopWidth: 0
                }
            }}
        >
            <Screen 
                name="homeTab"
                component={NativeStack}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) {
                            return <Ionicons name="home" color="#FFF" size={size} />
                        }

                        return <Ionicons name="home-outline" color="#FFF" size={size} />
                    }
                }}
            />

            <Screen 
                name="favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused) {
                            return <Ionicons name="bookmarks" color="#FFF" size={size} />
                        }

                        return <Ionicons name="bookmarks-outline" color="#FFF" size={size} />
                    }
                }}
            />
        </Navigator>
    )
}