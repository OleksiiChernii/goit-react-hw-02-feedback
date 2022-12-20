import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export function Section({
  title,
  state,
  options,
  total,
  onLeaveFeedback,
  positivePercentage,
}) {
  return (
    <>
      <h1>{title}</h1>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      <Statistics
        state={state}
        total={total}
        positivePercentage={positivePercentage}
      />
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
  onLeaveFeedback: PropTypes.shape({
    Good: PropTypes.func.isRequired,
    Neutral: PropTypes.func.isRequired,
    Bad: PropTypes.func.isRequired,
  }).isRequired,
};
