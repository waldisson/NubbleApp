import {Box} from '../../../components/Box/Box';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function SignUpScreen() {
  return (
    <Screen>
      <Box>
        <Text preset="headingLarge" mb="s32">
          Criar uma conta
        </Text>

        <TextInput label="Seu username" />

        <TextInput label="Nome completo" />

        <TextInput label="E-mail" />

        <TextInput label="Senha" />
      </Box>
    </Screen>
  );
}
