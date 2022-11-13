import { Audio } from 'react-loader-spinner';
import PropTypes from 'prop-types';

export const Loader = ({ isLoading }) => {
  return (
    <div className="Loader">
      <Audio
        height="40"
        width="40"
        radius="9"
        color="#b8bcd2"
        ariaLabel="three-dots-loading"
        visible={isLoading}
      />
    </div>
  );
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
