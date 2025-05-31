import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getBattery } from '../../utils/battery';
import Nav from './nav';

import Battery_0 from '../../assets/battery-0.png';
import Battery_25 from '../../assets/battery-25.png';
import Battery_50 from '../../assets/battery-50.png';
import Battery_75 from '../../assets/battery-75.png';
import Battery_100 from '../../assets/battery-100.png';

import styles from '../style';

function BatteryScreen({ navigation }) {
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [isCharging, setIsCharging] = useState(false);

    const getBatteryImage = (level) => {
        if (level === null) return Battery_0;
        const percent = Math.round(level * 100);
        if (percent <= 25) return Battery_0;
        if (percent <= 50) return Battery_25;
        if (percent <= 75) return Battery_50;
        if (percent < 100) return Battery_75;
        return Battery_100;
    };

    useEffect(() => {
        const fetchData = async () => {
            const status = await getBattery();
            setBatteryLevel(status.batteryLevel);
            setIsCharging(status.isCharging);
        };

        fetchData();
        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.battery_conteiner}>
            <Text style={styles.title}>Battery Information</Text>
            <Image source={getBatteryImage(batteryLevel)} style={styles.batteryImage} />
            <Text style={styles.bolder}>Charging Status: {Math.round(batteryLevel * 100)}%</Text>
        </View>
    );
}



export default BatteryScreen;
