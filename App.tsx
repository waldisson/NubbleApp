import {SafeAreaView} from 'react-native';
import React from 'react';
import {Text} from './src/components/Text/Text';

const App = () => {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" style={{color: 'red'}}>
        App
      </Text>
      <Text preset="headingMedium">App</Text>
      <Text preset="paragraphCaptionSmall">App</Text>
    </SafeAreaView>
  );
};

export default App;
