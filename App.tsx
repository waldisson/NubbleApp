import {SafeAreaView, View} from 'react-native';
import React from 'react';

import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {Icon} from './src/components/Icon/icon';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          {/* <Text preset="headingLarge" italic>
            Componentes
          </Text>
          <Button title="Login" />
          <Icon name="eyeOn" color="carrotSecondary" size={40} /> */}

          <Text preset="headingLarge" marginBottom="s8">
            Olá!
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <Text color="primary" preset="paragraphSmall" bold mt="s10">
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button preset="outline" marginTop="s12" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
