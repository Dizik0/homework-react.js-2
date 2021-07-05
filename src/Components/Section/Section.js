import { Component } from "react";

import { Statistic } from "../Statistic/Statistic";
import { FeadbackOption } from "../FeadbackOption/FeadbackOption";
import Notification from "../Notification/Notification";
export class Section extends Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  countTotalFeedback = () =>
    this.state.Good + this.state.Neutral + this.state.Bad;
  countPositiveFeedbackPercentage = () =>
    Math.trunc((this.state.Good * 100) / this.countTotalFeedback());

  eventCather = (preview) => () => {
    this.setState({ [preview]: this.state[preview] + 1 });
  };

  render() {
    return (
      <>
        <h1>Please leave feadback</h1>
        <FeadbackOption
          options={this.eventCather}
          btnOption={["Good", "Neutral", "Bad"]}
        />
        {this.countTotalFeedback() !== 0 ? (
          <Statistic
            Good={this.state.Good}
            Neutral={this.state.Neutral}
            Bad={this.state.Bad}
            total={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={"No feedback given"}></Notification>
        )}
      </>
    );
  }
}
