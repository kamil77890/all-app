import DeviceInfo from 'react-native-device-info';

export async function getBattery() {
    const batteryLevel = await DeviceInfo.getBatteryLevel();
    const isCharging = await DeviceInfo.isBatteryCharging();
    console.log(`Battery level: ${batteryLevel}, charging: ${isCharging}`);
    return {
        batteryLevel,
        isCharging
    };
}
