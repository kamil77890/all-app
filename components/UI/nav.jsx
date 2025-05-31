import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

import styles from "../style"

function Nav() {
    const navigation = useNavigation();
    return (
        <View style={styles.nav_container}>
            <TouchableOpacity onPress={() => navigation.navigate("Advanced_wifi")}>
                <Text style={styles.avg_text}>Wi-Fi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.bolder}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
                <Text style={styles.avg_text}>Battery</Text>
            </TouchableOpacity>
        </View>
    )

}


export default Nav