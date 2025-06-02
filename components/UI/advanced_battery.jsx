import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Switch, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBattery } from '../../utils/battery';
import Nav from './nav';

import Battery_0 from '../../assets/battery-0.png';
import Battery_25 from '../../assets/battery-25.png';
import Battery_50 from '../../assets/battery-50.png';
import Battery_75 from '../../assets/battery-75.png';
import Battery_100 from '../../assets/battery-100.png';
import Charging from '../../assets/charging.png';

import styles from '../style';

function AdvancedBatteryScreen() {
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [isCharging, setIsCharging] = useState(false);
    const [advancedSetings, setAdvancedSettings] = useState(false);
    const [batteryHistory, setBatteryHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    const prevChargingRef = useRef(null);

    const getBatteryImage = (level) => {
        if (level === null) return Battery_0;
        const percent = Math.round(level * 100);
        if (percent <= 25) return Battery_0;
        if (percent <= 50) return Battery_25;
        if (percent <= 75) return Battery_50;
        if (percent < 100) return Battery_75;
        return Battery_100;
    };

    const getBatteryTintColor = (level) => {
        if (level === null) return '#888';
        if (level <= 0.25) return '#ef4444';    
        if (level <= 0.5) return '#facc15';     
        if (level <= 0.75) return '#22c55e';    
        return '#4ade80';                       
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

    useEffect(() => {
        const monitorBattery = async () => {
            const status = await getBattery();
            setBatteryLevel(status.batteryLevel);
            setIsCharging(status.isCharging);

            const prevCharging = prevChargingRef.current;

            if (prevCharging !== null && prevCharging !== status.isCharging) {
                const event = {
                    type: status.isCharging ? 'CHARGER_CONNECTED' : 'CHARGER_DISCONNECTED',
                    level: Math.round(status.batteryLevel * 100) + '%',
                    timestamp: new Date().toISOString(),
                };

                try {
                    const history = JSON.parse(await AsyncStorage.getItem('batteryEvents')) || [];
                    history.push(event);
                    await AsyncStorage.setItem('batteryEvents', JSON.stringify(history));
                    setBatteryHistory(history);
                } catch (e) {
                    console.error("Saving battery event failed", e);
                }
            }

            prevChargingRef.current = status.isCharging;
        };

        const intervalId = setInterval(monitorBattery, 10000);
        return () => clearInterval(intervalId);
    }, []);

    const loadBatteryHistory = async () => {
        try {
            const history = await AsyncStorage.getItem('batteryEvents');
            const parsed = JSON.parse(history) || [];
            setBatteryHistory(parsed);
        } catch (e) {
            console.error("Reading battery events failed", e);
        }
    };

    useEffect(() => {
        if (advancedSetings) {
            loadBatteryHistory();
        }
    }, [advancedSetings]);

    const renderHistory = () => {
        const pairs = [];

        for (let i = 0; i < batteryHistory.length; i++) {
            const event = batteryHistory[i];
            if (event.type === 'CHARGER_CONNECTED' && batteryHistory[i + 1]?.type === 'CHARGER_DISCONNECTED') {
                const nextEvent = batteryHistory[i + 1];
                pairs.push({
                    start: event,
                    end: nextEvent,
                });
                i++;
            }
        }

        pairs.sort((a, b) => new Date(b.end.timestamp) - new Date(a.end.timestamp));

        if (pairs.length === 0) {
            return <Text>Brak zapisanej historii ładowania</Text>;
        }

        return pairs.map((pair, index) => {
            const start = new Date(pair.start.timestamp);
            const end = new Date(pair.end.timestamp);
            const durationMinutes = Math.round((end - start) / 60000);

            const isLast = index === pairs.length - 1;

            return (
                <View
                    key={index}
                    style={{
                        marginBottom: isLast ? 70 : 15,
                        padding: 12,
                        backgroundColor: '#2c2c2e',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#3a3a3c',
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: '#ffd700', marginBottom: 4 }}>
                        🔌 Ładowanie rozpoczęto:
                    </Text>
                    <Text style={{ color: '#ffffff' }}>Poziom: {pair.start.level}</Text>
                    <Text style={{ color: '#bbbbbb', marginBottom: 8 }}>
                        Czas: {start.toLocaleString()}
                    </Text>

                    <Text style={{ fontWeight: 'bold', color: '#00bfff', marginBottom: 4 }}>
                        🔋 Odłączono ładowarkę:
                    </Text>
                    <Text style={{ color: '#ffffff' }}>Poziom: {pair.end.level}</Text>
                    <Text style={{ color: '#bbbbbb' }}>
                        Czas: {end.toLocaleString()} ({durationMinutes} min)
                    </Text>
                </View>
            );
        });
    };

    if (loading) {
        return (
            <View style={[styles.battery_adv_container, localStyles.centeredContainer]}>
                <ActivityIndicator size="large" color="#82aaff" />
                <Text style={styles.batteryLevelText}>Loading battery info...</Text>
            </View>
        );
    }

    return (
        <View style={styles.battery_adv_container}>
            <Text style={styles.title}>Advanced Battery Information</Text>
            <Image
                source={isCharging ? Charging : getBatteryImage(batteryLevel)}
                style={[styles.batteryImage, { tintColor: getBatteryTintColor(batteryLevel) }]}
            />
            <Text style={styles.batteryLevelText}>
                Charging Status: {batteryLevel !== null ? `${Math.round(batteryLevel * 100)}%` : "N/A"}
            </Text>

            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Enable Advanced Features</Text>
                <Switch
                    value={advancedSetings}
                    onValueChange={(val) => {
                        setAdvancedSettings(val);
                        if (val) loadBatteryHistory();
                    }}
                />
            </View>

            {advancedSetings &&
                <ScrollView style={styles.advanced_battery_settings} contentContainerStyle={{ paddingBottom: 20 }}>
                    <Text style={styles.bolder}>
                        Historia zdarzeń ładowania:
                    </Text>
                    <View style={styles.margin_16} />
                    {renderHistory()}
                </ScrollView>
            }

            <Nav />
        </View>
    );
}

const localStyles = StyleSheet.create({
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 16,
    },
});

export default AdvancedBatteryScreen;
