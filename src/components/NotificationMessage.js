import PropTypes from 'prop-types';

export function NotificationMessage({ message }) {
  return <p>{message}</p>;
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
