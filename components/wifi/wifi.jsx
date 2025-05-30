import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import styles from "../styles/style";
import wifi_image from "../../assets/wifi.png";
import not_conn from "../../assets/not_conected.png";
import ok_status from "../../assets/ok_status.webp";

import { getWifiData, getWifiList } from "../../utils/wifi_data";

const Wifi = () => {
    const [wifiData, setWifiData] = useState(null);
    const [wifiList, setWifiList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            // If getWifiData/getWifiList are async, await them
            const data = await getWifiData();
            const list = await getWifiList();

            setWifiData(data);
            setWifiList(list);
        };

        fetchData();

        const intervalId = setInterval(fetchData, 10000);

        return () => clearInterval(intervalId);
    }, []);

    console.log("Wifi Data:", wifiData);
    console.log("Wifi List:", wifiList);

    return (
        <View style={styles.wifi_container}>
            <View style={styles.img_container}>
                <Image source={wifi_image} style={styles.image} />
            </View>
            <View style={styles.wifi_data}>
                <Text style={styles.bolder}>
                    Wifi: {wifiData ? wifiData : "No wifi connected"}
                </Text>
                <View style={styles.wifi_status}>
                    <Text style={styles.bolder}>
                        Status:
                    </Text>
                    {wifiData ? (
                        <Image source={ok_status} style={{ width: 20, height: 20 }} />
                    ) : (
                        <Image source={not_conn} style={{ width: 20, height: 20 }} />
                    )}
                </View>
            </View>
        </View>
    );
};

export default Wifi;
