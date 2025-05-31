import React, { useEffect } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { registerForPushNotificationsAsync, sendLocalNotification } from '../../utils/notifications';

export default function Notification() {
    useEffect(() => {
        registerForPushNotificationsAsync();
    }, []);

    return (
        <View style={styles.container}>
            <Button
                title="Wyślij powiadomienie"
                onPress={sendLocalNotification}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
