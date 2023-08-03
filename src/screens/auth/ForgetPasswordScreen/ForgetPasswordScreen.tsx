import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {RootStackParamList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgetPasswordScreen'
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ForgetPasswordScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: `Enviamos as instruções ${'\n'}para seu e-mail`,
      description:
        'Clique no link enviado no seu  e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />

      <Button title="Recuperar senha" onPress={submitForm} />
    </Screen>
  );
}
