import React from 'react';
import { ControlledInputField } from 'components';

const InputFieldsCredentials = ({ username, password, onChange }) => {
  const credentialFields = [
    {
      label: 'Instagram Login:',
      id: 'username',
      type: 'text',
      placeholder: 'username or email',
      name: 'username',
      autoComplete: 'username',
      value: username || '',
      onChange,
      required: true
    },
    {
      label: 'Instagram Password:',
      id: 'password',
      type: 'password',
      placeholder: 'password',
      name: 'password',
      autoComplete: 'password',
      value: password || '',
      onChange,
      required: true
    }
  ];

  return credentialFields.map((field, id) => {
    return (
      <ControlledInputField
        key={id}
        label={field.label}
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        name={field.name}
        autoComplete={field.autoComplete}
        value={field.value}
        onChange={field.onChange}
        required={field.required}
      />
    );
  });
};

export default InputFieldsCredentials;
