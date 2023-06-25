import React from 'react';
import {View} from 'react-native';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/icon';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function LoginScreen() {
  return (
    <Screen>
      <View>
        <Text preset="headingLarge" marginBottom="s8">
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>
        <Box>
          <TextInput
            errorMessage="Digite um e-mail válido"
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's16'}}
          />
        </Box>
        <Box>
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" size={20} color="gray2" />}
            boxProps={{mb: 's10'}}
          />
        </Box>
        <Text color="primary" preset="paragraphSmall" bold mt="s10">
          Esqueci minha senha
        </Text>

        <Button marginTop="s48" title="Entrar" />
        <Button preset="outline" marginTop="s12" title="Criar uma conta" />
      </View>
    </Screen>
  );
}
