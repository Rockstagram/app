import React from 'react';
import { RadioButtons } from 'components';

const InputFieldsSpeed = ({ speed, onChange, className }) => {
  const speedButtons = [
    {
      value: 1,
      checked: speed === 1,
      tooltip: 'slow speed [Included]',
      content: 'Slow'
    },
    {
      value: 10,
      checked: speed === 10,
      content: 'Med',
      tooltip: 'medium speed [Pro Feature]',
      disabled: true,
      isPro: 'pro'
    },
    {
      value: 20,
      checked: speed === 20,
      content: 'Fast',
      tooltip: 'fast speed [Pro Feature]',
      disabled: true,
      isPro: 'pro'
    },
    {
      value: 30,
      checked: speed === 30,
      content: 'Maximum',
      tooltip: 'extreme speed [Premium Feature]',
      disabled: true,
      isPro: 'premium'
    }
  ];

  return (
    <div className={className}>
      <div className="mb-s">
        <label className={`${className}__label label`}>Speed:</label>
        <RadioButtons
          className={className && `${className}__radio`}
          baseName="speed"
          buttons={speedButtons}
          onChange={value => onChange({ target: { id: 'speed' }, value })}
        />
      </div>
      <div className={`${className}__subtext`}>
        <ul>
          <li>Slow: ~20 users/h (Included)</li>
          <li>Med: ~100 users/h (Pro)</li>
          <li>Fast: ~200 users/h (Pro)</li>
          <li>Maximum: max users/h (Premium)</li>
        </ul>
      </div>
    </div>
  );
};

export default InputFieldsSpeed;
