import React from 'react';
import { ControlledInputField } from 'components';

const InputFieldsUserHandle = ({ userHandle, onChange }) => {
  return (
    <div>
      <ControlledInputField
        label="User Handle (your instagram username):"
        id="userHandle"
        placeholder="jonDoe123"
        name="userHandle"
        autoComplete="username"
        value={userHandle || ''}
        onChange={onChange}
        required="true"
        subText="
          Enter your instagram username (not your email).
          The username is what people can mention you with, we call it user handle. For example, if “@jonDoe123” is your handle, 
          and you can be found via “instagram.com/jonDoe123/”, then your username and handle is “jonDoe123”
          in that case, you would enter “jonDoe123” (without the quotes) in this field"
      />
    </div>
  );
};

export default InputFieldsUserHandle;
