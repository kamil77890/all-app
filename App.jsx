import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainLayout from './components/MainLayout';
import NotFoundScreen from './components/not_found';
import { requestPermissions } from './utils/permissions';

const Stack = createNativeStackNavigator();

export default function App() {
  const [per, setPer] = React.useState(false);

  React.useEffect(() => {
    requestPermissions();
    setPer(true);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={MainLayout} />
        <Stack.Screen name="404_page" component={NotFoundScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
