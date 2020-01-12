import React from 'react';
import {StatusBar} from 'react-native';
import './config/ReactotronConfig';
import {Provider} from 'react-redux';
import Routes from './routes';
import store from './store';
import NavigationService from './NavigationService';
import Header from './components/Header';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#141419" barStyle="light-content" />
      <Header />
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </Provider>
  );
};

export default App;
