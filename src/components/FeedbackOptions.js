import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <button key={option} type="button" onClick={onLeaveFeedback[option]}>
          {option}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.shape({
    Good: PropTypes.func.isRequired,
    Neutral: PropTypes.func.isRequired,
    Bad: PropTypes.func.isRequired,
  }).isRequired,
};
