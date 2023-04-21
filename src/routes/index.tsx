import { NavigationContainer } from "@react-navigation/native";
import { Tab } from "./tab.routes";

export function Route() {
    return (
        <NavigationContainer>
            <Tab />
        </NavigationContainer>
    )
}