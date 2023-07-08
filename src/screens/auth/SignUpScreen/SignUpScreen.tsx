import React from 'react';
import {Box} from '../../../components/Box/Box';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  function submitForm() {
    console.log('aqui');
    navigation.navigate('SuccessScreen');
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

        <PasswordInput
          label="Senha"
          secureTextEntry
          placeholder="Digite sua senha"
          boxProps={{mb: 's48'}}
        />
        <Button title="Criar uma conta" onPress={submitForm} />
      </Box>
    </Screen>
  );
}
