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
  let input = (
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
  );

  if (type === 'textarea') {
    input = (
      <textarea
        className={`${className}__input input`}
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        required={JSON.parse(required)}
        cols="30"
        rows="10"
      >
        {value || ''}
      </textarea>
    );
  }
  return (
    <div className={className}>
      <div className="mb-s">
        <label className={`${className}__label label`} htmlFor={id}>
          {label}
        </label>
        {input}
      </div>
      <div>{subText}</div>
    </div>
  );
};

export default ControlledInputField;
