import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function NotFoundScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        This screen doesn't exist!
      </Text>
      <Button title="Go Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
