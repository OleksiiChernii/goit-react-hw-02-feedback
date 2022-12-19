import { useState } from 'react';
import Section from './Statistics';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleState = option => {
    let {good, bad, neutral} = state;
    
    switch (option){
      case 'good': good += 1;break;
      case 'neutral': neutral += 1;break;
      case 'bad': bad += 1; break;
      default: break;
    }
    setState({good, bad, neutral});
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
    Good: () => handleState('good'),
    Neutral: () => handleState('neutral'),
    Bad: () => handleState('bad'),
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
