import {SafeAreaView, View} from 'react-native';
import React from 'react';

import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>

          <Button
            title="Entrar"
            marginBottom="s12"
            backgroundColor="buttonPrimary"
          />

          <Button loading={false} title="Loading" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
