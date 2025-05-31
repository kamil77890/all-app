import React from "react";
import { useFonts } from "expo-font";
import { Text, View, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./style";

import Wifi from "./UI/wifi";
// import Bluetooth from "./UI/bluetooth";
import Battery from "./UI/battery";
import Nav from "./UI/nav";

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

            <Nav navigation={navigation} />
        </View>
    );
};


export default MainLayout;
