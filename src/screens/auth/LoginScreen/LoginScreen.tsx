import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Alert, View} from 'react-native';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamList} from '../../../routes/Routes';

type LoginFromType = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFromType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginFromType) {
    console.log('opa');
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
          Olá!
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <Controller
          control={control}
          rules={{
            required: 'E-mail obrigatário',
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'E-mail inválido',
            },
          }}
          name="email"
          render={({field, fieldState}) => (
            <TextInput
              errorMessage={fieldState.error?.message}
              label="E-mail"
              value={field.value}
              onChangeText={field.onChange}
              placeholder="Digite seu e-mail"
              boxProps={{mb: 's16'}}
            />
          )}
        />

        <Controller
          control={control}
          rules={{
            required: 'Senha obrigatória',
          }}
          name="password"
          render={({field, fieldState}) => (
            <PasswordInput
              errorMessage={fieldState.error?.message}
              label="Senha"
              value={field.value}
              onChangeText={field.onChange}
              secureTextEntry
              placeholder="Digite sua senha"
              boxProps={{mb: 's10'}}
            />
          )}
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
