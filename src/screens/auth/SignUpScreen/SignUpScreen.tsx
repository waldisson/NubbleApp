import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {AuthScreenProps} from 'src/routes/navigationType';

import {
  Box,
  Text,
  Button,
  FormPasswordInput,
  FormTextInput,
  Screen,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {signUpSchema, SignUpSchema} from './signUpSchema';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchema) {
    console.log('Submit', formValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Box>
        <Text preset="headingLarge" mb="s32">
          Criar uma conta
        </Text>

        <FormTextInput
          control={control}
          name="username"
          autoCapitalize="words"
          label="Seu username"
          placeholder="@"
          boxProps={{mb: 's16'}}
        />
        <FormTextInput
          control={control}
          name="fullname"
          label="Nome completo"
          autoCapitalize="words"
          placeholder="Digite seu Nome completo"
          boxProps={{mb: 's16'}}
        />

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
          boxProps={{mb: 's48'}}
        />

        <Button
          title="Criar uma conta"
          disabled={!formState.isValid}
          onPress={handleSubmit(submitForm)}
        />
      </Box>
    </Screen>
  );
}
