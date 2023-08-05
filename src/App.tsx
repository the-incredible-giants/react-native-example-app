import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Retailers from './components/Retailers';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RetailerDetails from './components/RetailerDetails/RetailerDetails';
import { StackParamTypes } from './utils/types';

const Stack = createNativeStackNavigator<StackParamTypes>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Retailers" component={Retailers} />
            <Stack.Screen
              name="RetailerDetails"
              component={RetailerDetails}
              options={{
                title: 'Retailer details',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
