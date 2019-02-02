import React from 'react';
import { connect } from 'react-redux';
import { planSizes } from 'constantz';
import { RadioButtons } from 'components';
const { SMALL, LARGE } = planSizes;

const InputFieldsSpeed = ({ speed, onChange, className, user }) => {
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
          <li>Slow: ~200 users/h (Included)</li>
          <li>Med: ~400 users/h (Pro)</li>
          <li>Fast: ~600 users/h (Pro)</li>
          <li>Maximum: max users/h (Premium)</li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.item
});

// Use connect to put them together
export default connect(
  mapStateToProps,
  null
)(InputFieldsSpeed);
