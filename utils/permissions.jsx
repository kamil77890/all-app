import { PermissionsAndroid } from 'react-native';

export async function requestPermissions() {
    try {
        const locationGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Uprawnienia lokalizacji',
                message: 'Aplikacja potrzebuje dostępu do lokalizacji, aby skanować sieci Wi-Fi i urządzenia Bluetooth.',
                buttonNeutral: 'Zapytaj później',
                buttonNegative: 'Anuluj',
                buttonPositive: 'OK',
            },
        );

        const bluetoothScanGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            {
                title: 'Uprawnienia Bluetooth (skanowanie)',
                message: 'Aplikacja potrzebuje dostępu do skanowania urządzeń Bluetooth.',
                buttonNeutral: 'Zapytaj później',
                buttonNegative: 'Anuluj',
                buttonPositive: 'OK',
            },
        );

        const bluetoothConnectGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            {
                title: 'Uprawnienia Bluetooth (łączenie)',
                message: 'Aplikacja potrzebuje dostępu do łączenia się z urządzeniami Bluetooth.',
                buttonNeutral: 'Zapytaj później',
                buttonNegative: 'Anuluj',
                buttonPositive: 'OK',
            },
        );

        const changeWifiStateGranted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CHANGE_WIFI_STATE,
            {
                title: 'Uprawnienia do zmiany stanu Wi-Fi',
                message: 'Aplikacja potrzebuje dostępu do zmiany ustawień Wi-Fi.',
                buttonNeutral: 'Zapytaj później',
                buttonNegative: 'Anuluj',
                buttonPositive: 'OK',
            },
        );

        if (
            locationGranted === PermissionsAndroid.RESULTS.GRANTED &&
            bluetoothScanGranted === PermissionsAndroid.RESULTS.GRANTED &&
            bluetoothConnectGranted === PermissionsAndroid.RESULTS.GRANTED &&
            changeWifiStateGranted === PermissionsAndroid.RESULTS.GRANTED
        ) {
            console.log('Wszystkie wymagane uprawnienia przyznane');
        } else {
            console.log('Niektóre uprawnienia zostały odrzucone');
        }
    } catch (err) {
        console.warn(err);
    }
}
