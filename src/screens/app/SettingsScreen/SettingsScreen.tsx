import React from 'react';

import {AppScreenProps} from 'src/routes/navigationType';

import {Screen, Text} from '@components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen(props: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingMedium">Settings Screen</Text>
    </Screen>
  );
}
