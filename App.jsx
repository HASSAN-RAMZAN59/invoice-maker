import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { BusinessProvider } from './src/context/BusinessContext';
import { ClientProvider } from './src/context/ClientContext';

function App() {
  return (
    <SafeAreaProvider>
      <ClientProvider>
        <BusinessProvider>
          <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
          <AppNavigator />
        </BusinessProvider>
      </ClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
