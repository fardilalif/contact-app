import React from 'react';
import GlobalProvider from './src/context/Provider.js';
import AppNavContainer from './src/navigations/index.js';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
