import WifiManager from 'react-native-wifi-reborn';

export async function getWifiData() {
    try {
        if (WifiManager && WifiManager.getCurrentWifiSSID) {
            const ssid = await WifiManager.getCurrentWifiSSID();
            console.log('Połączono z:', ssid);
            return ssid;
        }
    } catch (error) {
        console.log('Nie udało się pobrać SSID:', error);
    }
    return null;
}

export async function getWifiList() {
    try {
        if (WifiManager && WifiManager.loadWifiList) {
            const wifiList = await WifiManager.loadWifiList();
            console.log('Lista Wi-Fi:', wifiList);
            return wifiList;
        } else {
            console.log('loadWifiList method is not available.');
        }
    } catch (error) {
        console.error('Błąd podczas pobierania listy Wi-Fi:', error);
    }
    return null;
}
export async function changeWifiState(enable) {
    try {
        if (WifiManager && WifiManager.setEnabled) {
            await WifiManager.setEnabled(enable);
            console.log(`Wi-Fi ${enable ? 'włączone' : 'wyłączone'}`);
        } else {
            console.log('setEnabled method is not available.');
        }
    } catch (error) {
        console.error('Błąd podczas zmiany stanu Wi-Fi:', error);
    }
}