import React from 'react';
import { connect } from 'react-redux';
import { RadioButtons } from 'components';
import { planSizes } from 'constantz';
const { SMALL, LARGE } = planSizes;

const InputFieldsSpeed = ({
  speed,
  onChange,
  className,
  user,
  baseSpeed = 3500
}) => {
  const speedButtons = [
    {
      value: 1,
      checked: speed === 1,
      tooltip: 'slow speed [Included]',
      content: 'Slow'
    },
    {
      value: 3,
      checked: speed === 3,
      content: 'Med',
      tooltip: 'medium speed [Pro Feature]',
      disabled: user.plan === SMALL,
      isPro: 'pro'
    },
    {
      value: 5,
      checked: speed === 5,
      content: 'Fast',
      tooltip: 'fast speed [Pro Feature]',
      disabled: user.plan === SMALL,
      isPro: 'pro'
    },
    {
      value: 10,
      checked: speed === 10,
      content: 'Maximum',
      tooltip: 'extreme speed [Premium Feature]',
      disabled: user.plan !== LARGE,
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
          <li>
            Slow: ~{Math.floor((35000 * 200) / baseSpeed)} users/h (Included)
          </li>
          <li>Med: ~{Math.floor((35000 * 400) / baseSpeed)} users/h (Pro)</li>
          <li>Fast: ~{Math.floor((35000 * 600) / baseSpeed)} users/h (Pro)</li>
          <li>Maximum: max users/h (Premium)</li>
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
