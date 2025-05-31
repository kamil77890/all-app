import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { getBattery } from '../../utils/battery';

function BatteryScreen() {
    useEffect(() => {
        const fetchData = async () => {
            const a = await getBattery();
            console.log('Battery Level:', a.batteryLevel);
            console.log('Is Charging:', a.isCharging ? 'Yes' : 'No');
        };

        fetchData();
        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Battery Info</Text>
            <Text>Check console for battery status</Text>
        </View>
    );
}

export default BatteryScreen;
