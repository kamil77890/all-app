import React, { useState, useEffect } from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';

import { getWifiData, getWifiList } from '../../utils/wifi_data';
import Nav from './nav';

import styles from '../style';


function AdvancedWifi({ navigate }) {
    const [wifiData, setWifiData] = useState(null);
    const [wifiList, setWifiList] = useState([]);
    const [wifi_lvl, setWifi_lvl] = useState(null);
    const [sygnal, setSygnal] = useState(null);

    const [advancedSetings, setAdvancedSettings] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            const data = await getWifiData();
            const list = await getWifiList();

            setWifiData(data);
            setWifiList(list);
        };

        fetchData();

        const intervalId = setInterval(fetchData, 30000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (!wifiData || wifiList.length === 0) return;

        const currentNetwork = wifiList.find((item) => item.SSID === wifiData);
        setWifi_lvl(currentNetwork ? currentNetwork.level : null);
    }, [wifiData, wifiList]);


    useEffect(() => {
        console.log('wifi_lvl:', wifi_lvl);
        if (wifi_lvl === null) {
            setSygnal(null);
            return;
        }

        if (wifi_lvl >= -50) {
            setSygnal(1);
        } else if (wifi_lvl < -50 && wifi_lvl >= -70) {
            setSygnal(2);
        } else if (wifi_lvl < -70) {
            setSygnal(3);
        } else {
            setSygnal(null);
        }
    }, [wifi_lvl]);

    const renderSignalImage = () => {
        if (sygnal === null) return null;
        if (sygnal === 1) return <Text style={styles.signalText}>Strong Signal</Text>;
        if (sygnal === 2) return <Text style={styles.signalText}>Moderate Signal</Text>;
        if (sygnal === 3) return <Text style={styles.signalText}>Weak Signal</Text>;
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Advanced WiFi Information</Text>
            <View style={styles.wifiInfoContainer}>
                <Text style={styles.wifiText}>Current Network: {wifiData || 'Not Connected'}</Text>
                <Text style={styles.wifiText}>Signal Level: {wifi_lvl !== null ? `${wifi_lvl} dBm` : 'N/A'}</Text>
                {renderSignalImage()}
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Enable Advanced Features</Text>
                <Switch
                    value={advancedSetings}
                    onValueChange={(advancedSetings) => setAdvancedSettings(advancedSetings)}
                />
            </View>
            {advancedSetings && (
                <ScrollView
                    style={styles.advancedSettingsContainer}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <Text style={styles.advancedText}>Advanced settings are enabled.</Text>
                    {
                        wifiList.length > 0 ? (
                            <View style={styles.wifiListContainer}>
                                {wifiList.map((item, index) => {
                                    const isLast = index === wifiList.length - 1;
                                    return (
                                        <View
                                            key={index}
                                            style={[
                                                styles.wifiItem,
                                                isLast && { marginBottom: 70 }, // add marginBottom only on last item
                                            ]}
                                        >
                                            <Text style={styles.wifiItemText}>SSID: {item.SSID}</Text>
                                            <Text style={styles.wifiItemText}>Signal Level: {item.level} dBm</Text>
                                            <Text style={styles.wifiItemText}>Frequency: {item.frequency} MHz</Text>
                                            <Text style={styles.wifiItemText}>BSSID: {item.BSSID}</Text>
                                            <Text style={styles.wifiItemText}>Capabilities: {item.capabilities}</Text>
                                        </View>
                                    );
                                })}
                            </View>
                        ) : (
                            <Text style={[styles.noWifiText, { marginBottom: 50 }]}>No WiFi networks found.</Text>
                        )
                    }

                </ScrollView>
            )}
            <Nav navigate={navigate} />
        </View>
    );

}


export default AdvancedWifi;