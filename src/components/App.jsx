import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  options = ['Good', 'Neutral', 'Bad'];
  
  countTotalFeedBack = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  handleState = option => {
    let { good, bad, neutral } = this.state;

    switch (option.toLowerCase()) {
      case 'good':
        good += 1;
        break;
      case 'neutral':
        neutral += 1;
        break;
      case 'bad':
        bad += 1;
        break;
      default:
        break;
    }
    this.setState({ good, bad, neutral });
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedBack()
      ? ((100 * this.state.good) / this.countTotalFeedBack()).toFixed(1)
      : 0;
  };


  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.handleState}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedBack}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  }
}
