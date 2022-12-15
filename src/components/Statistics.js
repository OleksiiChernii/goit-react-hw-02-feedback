import PropTypes from 'prop-types';

function Statistics({ state, total, positivePercentage }) {
  const { good, neutral, bad } = state;
  return (
    <>
      <p>Statistics</p>
      {good || neutral || bad ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total()}</li>
          <li>Positive feedback: {positivePercentage()}%</li>
        </ul>
      ) : (
        <NotificationMessage message="There is no feedback" />
      )}
    </>
  );
}

function NotificationMessage({ message }) {
  return <p>{message}</p>;
}

function FeedbackOptions({ options, onLeaveFeedback }) {
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

function Section({
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
        bad: PropTypes.number.isRequired
    }),
    options: PropTypes.arrayOf(PropTypes.string),
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
    onLeaveFeedback: PropTypes.shape({
        Good: PropTypes.func.isRequired,
        Neutral: PropTypes.func.isRequired,
        Bad: PropTypes.func.isRequired
    })
}

export default Section;
