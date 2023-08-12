import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Icon} from '../../../components/Icon/Icon';
import {RootStackParamList} from '../../../routes/Routes';
import {Text, Button, Screen} from '@components';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  const goBackToBegin = () => {
    navigation.goBack();
  };
  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={goBackToBegin} title="Voltar ao inicio" mt="s40" />
    </Screen>
  );
}
