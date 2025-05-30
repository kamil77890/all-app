import React, { useState } from "react";
import { View, Text } from "react-native";
import { getBatteryData } from "../../utils/battery";
import { useEffect } from "react";

import battery_0 from "../../assets/battery-0.svg";
import battery_25 from "../../assets/battery-25.svg";
import battery_50 from "../../assets/battery-50.svg";
import battery_75 from "../../assets/battery-75.svg";
import battery_100 from "../../assets/battery-100.svg";

import charging from "../../assets/charging.svg";


function Battery() {
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [isCharging, setIsCharging] = useState(null);
    const [batteryState, setBatteryState] = useState(null);

    useEffect(() => {
        const fetchBatteryData = async () => {
            // await getBatteryData();
        };

        fetchBatteryData();

        const intervalId = setInterval(fetchBatteryData, 10000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Battery Information</Text>
            <Text>Check console for battery data.</Text>
        </View>
    );
}

export default Battery;