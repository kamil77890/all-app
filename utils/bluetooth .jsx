import { BleManager } from 'react-native-ble-plx';

const manager = new BleManager();

export function stopBluetoothScan() {
    manager.stopDeviceScan();
}

export function startBluetoothScan() {
    manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            console.log('Błąd skanowania:', error);
            return;
        }

        console.log('Znaleziono urządzenie:', {
            id: device.id,
            name: device.name,
            rssi: device.rssi,
            manufacturerData: device.manufacturerData
        });
    });
}

export function getBluetoothDevices() {
    manager.getConnectedDevices()
        .then(devices => {
            console.log('Połączone urządzenia Bluetooth:', devices);
        })
        .catch(error => {
            console.error('Błąd podczas pobierania połączonych urządzeń Bluetooth:', error);
        });
}

export function getBluetoothState() {
    manager.state()
        .then(state => {
            console.log('Stan Bluetooth:', state);
        })
        .catch(error => {
            console.error('Błąd podczas pobierania stanu Bluetooth:', error);
        });
}

