import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getBluetoothState, getBluetoothDevices, startBluetoothScan, stopBluetoothScan } from "../../utils/bluetooth";

function Bluetooth() {
    const [bluetoothState, setBluetoothState] = useState(null);
    const [bluetoothDevices, setBluetoothDevices] = useState([]);
    const [scanning, setScanning] = useState(false);

    useEffect(() => {
        const fetchBluetoothData = async () => {
            const state = await getBluetoothState();
            setBluetoothState(state);

            const devices = await getBluetoothDevices();
            setBluetoothDevices(devices);
        };

        fetchBluetoothData();

        const intervalId = setInterval(fetchBluetoothData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    const handleScan = () => {
        if (scanning) {
            stopBluetoothScan();
            setScanning(false);
        } else {
            startBluetoothScan();
            setScanning(true);
        }
    };


    return (
        scanning ? (
            <View>
                <Text>Scanning for Bluetooth devices...</Text>
                {bluetoothDevices.map((device, index) => (
                    <Text key={index}>{device.name || "Unnamed Device"} - {device.id}</Text>
                ))}
            </View>
        ) : (
            <View>
                <Text>Bluetooth State: {bluetoothState}</Text>
                <Text onPress={handleScan} style={{ color: 'blue' }}>
                    {scanning ? "Stop Scanning" : "Start Scanning"}
                </Text>
            </View>
        )
    );
}

export default Bluetooth;