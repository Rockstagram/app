import React, { Component } from 'react';
import './FreeTimer.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LINKS } from 'Routes';
import { expired } from 'redux/actions/userActions';

class FreeTimer extends Component {
  state = {
    redirect: false,
    hours: '00',
    minutes: '00',
    seconds: '00'
  };
  secondsRemaining;
  intervalHandle;

  handleChange = event => {
    this.setState({
      minutes: event.target.value
    });
  };

  isExpired = () => {
    // clearInterval(this.intervalHandle);
    this.setState({
      redirect: true
    });
    this.props.expired(true);
  };

  tick = () => {
    const hour = Math.floor(this.secondsRemaining / 60 / 60);
    const min = Math.floor(this.secondsRemaining / 60) - hour * 60;
    const sec = Math.floor(this.secondsRemaining - min * 60 - hour * 60 * 60);

    this.setState({
      hours: hour < 10 ? '0' + hour : hour,
      minutes: min < 10 ? '0' + min : min,
      seconds: sec < 10 ? '0' + sec : sec
    });

    if (sec === 0 && min === 0 && hour === 0) return this.isExpired();

    this.secondsRemaining--;
  };

  startCountDown = () => {
    const { trial } = this.props;
    this.intervalHandle = setInterval(this.tick, 1000);
    this.secondsRemaining = (trial - Date.now()) / 1000;
  };

  componentDidMount() {
    this.startCountDown();
  }

  render() {
    if (this.state.redirect) return <Redirect to={LINKS.getPro} />;
    return (
      <Link to={LINKS.getPro} className="FreeTimer btn btn--cta" exact="true">
        <h2 className="FreeTimer__title">Free Trial Expires in</h2>
        <span className="FreeTimer__h">{this.state.hours}</span>:
        <span className="FreeTimer__m">{this.state.minutes}</span>:
        <span className="FreeTimer__s">{this.state.seconds}</span>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  trial: state.user.item.trial
});
const mapActionsToProps = { expired };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FreeTimer);
