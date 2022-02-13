import 'react-native-gesture-handler';
import React from 'react';
import {store} from './Store/store';
import {Provider} from 'react-redux';
import MainNavigation from './NavigationComponent';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
