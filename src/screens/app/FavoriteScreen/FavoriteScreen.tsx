import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingMedium">Favorite Screen</Text>
    </Screen>
  );
}
