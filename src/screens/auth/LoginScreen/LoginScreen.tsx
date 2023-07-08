import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function createAccount() {
    navigation.navigate('SignUpScreen');
  }

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
          <PasswordInput
            label="Senha"
            secureTextEntry
            placeholder="Digite sua senha"
            boxProps={{mb: 's48'}}
          />
        </Box>
        <Text color="primary" preset="paragraphSmall" bold mt="s10">
          Esqueci minha senha
        </Text>

        <Button marginTop="s48" title="Entrar" />
        <Button
          preset="outline"
          marginTop="s12"
          title="Criar uma conta"
          onPress={createAccount}
        />
      </View>
    </Screen>
  );
}
