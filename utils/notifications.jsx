import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export async function registerForPushNotificationsAsync() {
    if (!Device.isDevice) {
        alert('Powiadomienia działają tylko na fizycznym urządzeniu!');
        return false;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }

    if (finalStatus !== 'granted') {
        alert('Brak pozwolenia na powiadomienia!');
        return false;
    }

    return true;
}

export async function sendLocalNotification() {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Cześć! 👋',
            body: 'To jest lokalne powiadomienie z Expo',
            data: { info: 'dowolne dane' },
        },
        trigger: { seconds: 3 },
    });
}
