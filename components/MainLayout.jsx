import React from "react";
import { useFonts } from "expo-font";
import { Text, View, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles/style";

import Wifi from "./wifi/wifi";
// import Bluetooth from "./bluetooth/bluetooth";
import Battery from "./battery/battery";

const MainLayout = ({ navigation }) => {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    });

    if (!loaded) {
        return (
            <View style={styles.main_container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.main_container}>
            <StatusBar style="auto" />
            <Wifi />
            <Battery />
            <Button
                title="Click me"
                onPress={() => navigation.navigate("404_page")}
            />
        </View>
    );
};


export default MainLayout;
