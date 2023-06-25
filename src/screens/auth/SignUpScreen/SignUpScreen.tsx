import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {Icon} from '../../../components/Icon/icon';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  function submitForm() {
    //Todo
  }

  return (
    <Screen canGoBack scrollable>
      <Box>
        <Text preset="headingLarge" mb="s32">
          Criar uma conta
        </Text>
        <TextInput
          label="Seu username"
          placeholder="@"
          boxProps={{mb: 's16'}}
        />
        <TextInput
          label="Nome completo"
          placeholder="Digite seu Nome completo"
          boxProps={{mb: 's16'}}
        />
        <TextInput
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's16'}}
        />

        <TextInput
          label="Senha"
          placeholder="Digite sua senha"
          RightComponent={<Icon name="eyeOn" size={20} color="gray2" />}
          boxProps={{mb: 's48'}}
        />
        <Button title="Criar uma conta" onPress={submitForm} />
      </Box>
    </Screen>
  );
}
