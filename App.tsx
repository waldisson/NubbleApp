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
            Compoenente Button
          </Text>

          <Button title="Entrar" marginBottom="s12" marginTop="s14" />

          <Button loading title="Entrar" marginBottom="s12" disabled />

          <Button loading title="Loading" marginBottom="s12" />

          <Button preset="outline" title="Outline" marginBottom="s12" />
          <Button preset="outline" disabled title="Outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
