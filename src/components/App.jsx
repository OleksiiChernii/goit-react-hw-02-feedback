import { useState } from 'react';
import Section from './Statistics';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const buttonGood = () => {
    state.good += 1;
    setState({ ...state });
  };

  const buttonBad = () => {
    state.bad += 1;
    setState({ ...state });
  };

  const buttonNeutral = () => {
    state.neutral += 1;
    setState({ ...state });
  };

  const countTotalFeedBack = () => {
    const { good, bad, neutral } = state;
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedBack()
      ? ((100 * state.good) / countTotalFeedBack()).toFixed(1)
      : 0;
  };

  const onLeaveFeedback = {
    Good: buttonGood,
    Neutral: buttonNeutral,
    Bad: buttonBad,
  };

  return (
    <Section
      title="Please leave feedback"
      state={state}
      options={Object.keys(onLeaveFeedback)}
      total={countTotalFeedBack}
      positivePercentage={countPositiveFeedbackPercentage}
      onLeaveFeedback={onLeaveFeedback}
    />
  );
};
