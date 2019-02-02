import React, { Component } from 'react';
import { RadioButton } from 'components';
import { Redirect } from 'react-router-dom';
import { LINKS } from 'Routes';

class RadioButtons extends Component {
  checkedButton = this.props.buttons.filter(btn => btn.checked)[0];
  state = { selected: this.checkedButton.value, redirect: false };

  handleClick(isPro, disabled) {
    if (isPro && disabled) this.setState({ redirect: LINKS.getPro });
  }

  handleChange = selected => {
    this.setState({ selected });
    this.props.onChange(selected);
  };

  render() {
    if (this.state.redirect) return <Redirect to={this.state.redirect} />;

    const { baseName, buttons, className } = this.props;
    return buttons.map(({ value, content, disabled, tooltip, isPro }) => {
      return (
        <RadioButton
          key={value}
          id={`${baseName}${value}`}
          value={value}
          name={baseName}
          selected={this.state.selected === value}
          disabled={disabled}
          onChange={this.handleChange}
          tooltip={tooltip}
          className={className}
          onClick={() => this.handleClick(isPro, disabled)}
        >
          {content}
        </RadioButton>
      );
    });
  }
}

export default RadioButtons;
