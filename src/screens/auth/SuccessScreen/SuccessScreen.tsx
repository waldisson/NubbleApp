import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from '../../../components/Button/Button';
import {Icon} from '../../../components/Icon/Icon';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({navigation}: ScreenProps) {
  const goBackToBegin = () => {
    navigation.navigate('SuccessScreen');
  };
  return (
    <Screen>
      <Icon name="bellOn" />
      <Text preset="headingLarge" mt="s24">
        Title
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        Description
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao inicio" mt="s40" />
    </Screen>
  );
}
