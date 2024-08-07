import React from 'react';
import {SafeAreaView} from 'react-native';
import UpstoxHolding from './src/screen/UpstoxHolding';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UpstoxHolding />
    </SafeAreaView>
  );
}

export default App;
