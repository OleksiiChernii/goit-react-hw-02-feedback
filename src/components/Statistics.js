import PropTypes from 'prop-types';
import { NotificationMessage } from './NotificationMessage';

export function Statistics({ state, total, positivePercentage }) {
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

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
