import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormProps extends FieldValues>({
  control,
  rules,
  name,
  ...TextInputProps
}: TextInputProps & UseControllerProps<FormProps>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState}) => (
        <TextInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...TextInputProps}
        />
      )}
    />
  );
}
