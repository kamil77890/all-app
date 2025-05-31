import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayout from './components/MainLayout';
import NotFoundScreen from './components/not_found';
import AdvancedWifi from './components/UI/advanced_wifi';
// import BatteryScreen from './components/UI/battery';
import { requestPermissions } from './utils/permissions';

const Stack = createNativeStackNavigator();

export default function App() {

  React.useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MainLayout} />
        <Stack.Screen name="404_page" component={NotFoundScreen} />
        <Stack.Screen name="Advanced_wifi" component={AdvancedWifi} />
        {/* <Stack.Screen name="Advanced_battery" component={BatteryScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
