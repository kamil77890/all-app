import React, { useState, useEffect } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import styles from "../style";
import wifi_image from "../../assets/wifi.png";
import not_conn from "../../assets/not_conected.png";
import ok_status from "../../assets/ok_status.webp";

import green from "../../assets/green.webp";
import yellow from "../../assets/yellow.png";
import red from "../../assets/Red.png";

import { getWifiData, getWifiList } from "../../utils/wifi_data";

const Wifi = () => {
    const [wifiData, setWifiData] = useState(null);
    const [wifiList, setWifiList] = useState([]);
    const [wifi_lvl, setWifi_lvl] = useState(null);
    const [sygnal, setSygnal] = useState(null);

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
        console.log("wifi_lvl:", wifi_lvl);
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
        if (sygnal === 1)
            return (
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Image source={green} style={{ width: 20, height: 20 }} />
                    <Text style={styles.bolder}>Dobra</Text>
                </View>
            );
        if (sygnal === 2)
            return (
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Image source={yellow} style={{ width: 20, height: 20 }} />
                    <Text style={styles.bolder}>Średnia</Text>
                </View>
            );
        if (sygnal === 3)
            return (
                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <Image source={red} style={{ width: 20, height: 20, marginLeft: 10 }} />
                    <Text style={styles.avg_text}>Słaba</Text>
                </View>
            );
        return null;
    };


    return (
        <View style={styles.wifi_container}>
            <View style={styles.img_container}>
                <Image source={wifi_image} style={styles.image} />
            </View>

            <View style={styles.wifi_data_yes}>
                <View style={styles.wifi_data}>
                    <Text style={styles.bolder}>
                        Wifi: {wifiData ? wifiData : "No wifi connected"}
                    </Text>
                    <View style={styles.wifi_status}>
                        <Text style={styles.bolder}>Status:</Text>
                        {wifiData ? (
                            <Image source={ok_status} style={{ width: 20, height: 20 }} />
                        ) : (
                            <Image source={not_conn} style={{ width: 20, height: 20 }} />
                        )}
                    </View>
                </View>
                <View style={styles.wifi_data}>

                    <Text style={styles.bolder}>Siła sygnału:</Text>
                    <View style={styles.gap_16}></View>
                    {renderSignalImage()}
                </View>
            </View>
        </View>
    );
};

export default Wifi;
