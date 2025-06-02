import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import * as Progress from 'react-native-progress';
import { getBattery } from '../../utils/battery';

import Battery_0 from '../../assets/battery-0.png';
import Battery_25 from '../../assets/battery-25.png';
import Battery_50 from '../../assets/battery-50.png';
import Battery_75 from '../../assets/battery-75.png';
import Battery_100 from '../../assets/battery-100.png';
import Charging from '../../assets/charging.png';

import styles from '../style';
// ... pozostałe importy bez zmian

function BatteryScreen({ navigation }) {
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [isCharging, setIsCharging] = useState(false);
    const [loading, setLoading] = useState(true);

    const getBatteryImage = (level) => {
        if (level === null) return Battery_0;
        const percent = Math.round(level * 100);
        if (percent <= 25) return Battery_0;
        if (percent <= 50) return Battery_25;
        if (percent <= 75) return Battery_50;
        if (percent < 100) return Battery_75;
        return Battery_100;
    };

    const getBarColor = (level) => {
        if (level <= 0.25) return '#ef4444';
        if (level <= 0.5) return '#facc15';
        if (level <= 0.75) return '#22c55e';
        return '#4ade80';
    };

    const getBatteryTintColor = (level) => {
        if (level === null) return '#888';
        if (level <= 0.25) return '#ef4444';    // Red
        if (level <= 0.5) return '#facc15';     // Yellow
        if (level <= 0.75) return '#22c55e';    // Green
        return '#4ade80';                       // Light Green
    };

    useEffect(() => {
        const fetchData = async () => {
            const status = await getBattery();
            setBatteryLevel(status.batteryLevel);
            setIsCharging(status.isCharging);
            setLoading(false);
        };

        fetchData();
        const intervalId = setInterval(fetchData, 10000);
        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return (
            <View style={[styles.battery_adv_container, localStyles.centeredContainer]}>
                <ActivityIndicator size="large" color="#82aaff" />
                <Text style={styles.batteryLevelText}>Loading battery info...</Text>
            </View>
        );
    }

    return (
        <View style={localStyles.containerCentered}>
            <View style={styles.battery_info_container}>
                <Text style={styles.title_b}>Battery Information</Text>

                <Image
                    source={isCharging ? Charging : getBatteryImage(batteryLevel)}
                    style={[
                        styles.batteryImage,
                        { tintColor: getBatteryTintColor(batteryLevel) }
                    ]}
                />

                <Text style={styles.batteryStatusText}>
                    {Math.round(batteryLevel * 100)}%
                </Text>

                <Progress.Bar
                    progress={batteryLevel}
                    width={250}
                    height={12}
                    color={getBarColor(batteryLevel)}
                    borderRadius={8}
                    unfilledColor="#444"
                    borderWidth={0}
                    style={{ marginTop: 16 }}
                />

                <Text style={styles.avg_text}>
                    Possible Runtime: {Math.round(batteryLevel * 8)} hrs
                </Text>

                <View style={styles.margin_16}>
                    <Text style={styles.advancedText}>
                        Status: {isCharging ? "Charging ⚡" : "Not Charging🔋"}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const localStyles = StyleSheet.create({
    containerCentered: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 16,
    },
});


export default BatteryScreen;
