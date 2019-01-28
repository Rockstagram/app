import React from 'react';
import './RadioButton.css';

const RadioButton = ({
  id,
  value,
  name,
  disabled,
  children,
  selected,
  className = 'RadioButton',
  tooltip,
  onChange,
  onClick
}) => (
  <label className={className} onClick={onClick}>
    <input
      className={`${className}__input`}
      type="radio"
      id={id}
      value={value}
      name={name}
      defaultChecked={selected}
      disabled={disabled}
      onChange={() => onChange(value)}
    />
    <span
      className={`btn
        ${selected && 'btn--checked'}
        ${disabled && 'btn--disabled'}
        ${className}__btn`}
      title={tooltip}
    >
      {children}
    </span>
  </label>
);

export default RadioButton;
