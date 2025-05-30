import DeviceBattery from 'react-native-device-battery';




export function getBatteryData() {
    console.log("DeviceBattery module:", DeviceBattery);
    if (DeviceBattery && typeof DeviceBattery.getBatteryLevel === 'function') {
        DeviceBattery.getBatteryLevel().then(level => {
            console.log('Poziom baterii:', level);
        });
    } else {
        console.log('getBatteryLevel method is not available');
    }

    if (DeviceBattery && typeof DeviceBattery.isCharging === 'function') {
        DeviceBattery.isCharging().then(isCharging => {
            console.log('Czy ładowanie:', isCharging);
        });
    } else {
        console.log('isCharging method is not available');
    }
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