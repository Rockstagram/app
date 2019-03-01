import React from 'react';
import { connect } from 'react-redux';
import { RadioButtons } from 'components';

const InputFieldsSpeed = ({
  speed,
  onChange,
  className,
  user,
  baseSpeed = 3500,
  baseFactor = 100
}) => {
  const speedButtons = [
    {
      value: 1,
      checked: speed === 1,
      tooltip: 'slow speed [Included]',
      content: 'Slow'
    },
    {
      value: 2,
      checked: speed === 2,
      content: 'Med',
      tooltip: 'medium speed [Pro Feature]',
      isPro: 'pro'
    },
    {
      value: 3,
      checked: speed === 3,
      content: 'Fast',
      tooltip: 'fast speed [Pro Feature]',
      isPro: 'pro'
    },
    {
      value: 6,
      checked: speed === 6,
      content: 'Maximum',
      tooltip: 'extreme speed [Premium Feature]',
      disabled: user.trial,
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
          onChange={value => onChange({ target: { id: 'speed', value } })}
        />
      </div>
      <div className={`${className}__subtext`}>
        <ul>
          <li>Slow: ~{Math.floor((60000 * baseFactor * 1) / baseSpeed)}/h</li>
          <li>Med: ~{Math.floor((60000 * baseFactor * 1.5) / baseSpeed)}/h</li>
          <li>Fast: ~{Math.floor((60000 * baseFactor * 2) / baseSpeed)}/h</li>
          <li>
            Maximum: ~{Math.floor((60000 * baseFactor * 4.5) / baseSpeed)}/h
            (Premium)
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.item
});

export default connect(
  mapStateToProps,
  null
)(InputFieldsSpeed);
