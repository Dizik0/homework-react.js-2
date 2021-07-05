import { Component } from "react";
import { PropTypes } from "prop-types";
export class Statistic extends Component {
  render() {
    const { Good, Neutral, Bad, total, countPositiveFeedbackPercentage } =
      this.props;
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>
            Good <span>{Good}</span>
          </li>
          <li>
            Neutral<span>{Neutral}</span>
          </li>
          <li>
            Bad<span>{Bad}</span>
          </li>
          <li>
            total
            <span>{total}</span>
          </li>
          <li>
            Positive feedback
            <span>{countPositiveFeedbackPercentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

Statistic.propTypos = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  total: PropTypes.func.isRequired,
};
