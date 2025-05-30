import DeviceBattery from 'react-native-device-battery';

export function getBatteryData() {
    DeviceBattery.getBatteryLevel().then(level => {
        console.log('Poziom baterii:', level);
    });

    DeviceBattery.isCharging().then(isCharging => {
        console.log('Czy ładowanie:', isCharging);
    });
}

export function getBatteryState() {
    DeviceBattery.getBatteryState().then(state => {
        console.log('Stan baterii:', state);
    });
}

export function getBatteryTemperature() {
    DeviceBattery.getBatteryTemperature().then(temperature => {
        console.log('Temperatura baterii:', temperature);
    });
}

export function getBatteryHealth() {
    DeviceBattery.getBatteryHealth().then(health => {
        console.log('Stan zdrowia baterii:', health);
    });
}
export function getBatteryVoltage() {
    DeviceBattery.getBatteryVoltage().then(voltage => {
        console.log('Napięcie baterii:', voltage);
    });
}