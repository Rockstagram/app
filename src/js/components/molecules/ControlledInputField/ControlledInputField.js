import React from 'react';

import './ControlledInputField.css';

const ControlledInputField = ({
  className,
  label,
  type = 'text',
  id,
  placeholder,
  name,
  autoComplete,
  value,
  onChange,
  required,
  subText
}) => {
  return (
    <div className={className}>
      <div className="mb-s">
        <label className={`${className}__label label`} htmlFor={id}>
          {label}
        </label>
        <input
          className={`${className}__input input`}
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          autoComplete={autoComplete}
          value={value || ''}
          onChange={onChange}
          required={JSON.parse(required)}
        />
      </div>
      <div>{subText}</div>
    </div>
  );
};

export default ControlledInputField;
