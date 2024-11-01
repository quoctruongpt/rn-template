/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {AppNavigation} from '@/navigation/AppNavigation';
import {persistor, store} from '@/store';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
