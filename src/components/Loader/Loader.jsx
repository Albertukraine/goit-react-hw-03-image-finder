import { BallTriangle } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ isLoading }) => {
  return (
    <div className="Loader">
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#cfe2f3"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={isLoading}
/>
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
