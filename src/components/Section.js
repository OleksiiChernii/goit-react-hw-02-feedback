import PropTypes from 'prop-types';

export function Section({ title, children }) {
  console.log(children)
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};
