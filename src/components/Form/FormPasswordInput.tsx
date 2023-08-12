import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
import {PasswordInput, PasswordInputProps} from '@components';

export function FormPasswordInput<FormProps extends FieldValues>({
  control,
  rules,
  name,
  ...PasswordInputProps
}: PasswordInputProps & UseControllerProps<FormProps>) {
  return (
    <Controller
      control={control}
      rules={rules}
      name={name}
      render={({field, fieldState}) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...PasswordInputProps}
        />
      )}
    />
  );
}
