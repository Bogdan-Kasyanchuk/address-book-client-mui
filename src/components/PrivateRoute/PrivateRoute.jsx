import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsLoggedIn, getToken } from 'redux/auth/auth-selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const hasToken = useSelector(getToken);

  return hasToken ? (
    isLoggedIn && hasToken && children
  ) : (
    <Navigate to="/login" />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
