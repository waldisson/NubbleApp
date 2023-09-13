import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingMedium">New Screen</Text>
    </Screen>
  );
}
