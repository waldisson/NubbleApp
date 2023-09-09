import React from 'react';
import {Alert, View} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
} from '@components';
import {AuthScreenProps} from '@routes';

import {loginSchema, LoginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginSchema) {
    Alert.alert(`Email: , ${email} ${'\n'} Senha: '${password}`);
  }

  function navigateToForgetPassword() {
    navigation.navigate('ForgetPasswordScreen');
  }
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return (
    <Screen>
      <View>
        <Text preset="headingLarge" marginBottom="s8">
          Olá, Fernando Galhoz
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          {/* Digite seu e-mail e senha para entrar */}
          Tome na sua cara!
        </Text>

        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's16'}}
        />

        <FormPasswordInput
          control={control}
          name="password"
          label="Senha"
          secureTextEntry
          placeholder="Digite sua senha"
          boxProps={{mb: 's16'}}
        />
        <Text
          onPress={navigateToForgetPassword}
          color="primary"
          preset="paragraphSmall"
          bold
          mt="s10">
          Esqueci minha senha
        </Text>

        <Button
          marginTop="s48"
          title="Entrar"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
        <Button
          preset="outline"
          marginTop="s12"
          title="Criar uma conta"
          onPress={navigateToSignUpScreen}
        />
      </View>
    </Screen>
  );
}
