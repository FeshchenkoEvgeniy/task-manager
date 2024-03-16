import { Navigate } from 'react-router-dom';
import { useIsLogined } from 'hooks';

const RestrictedRouteComponent = ({ children, redirectTo = '/' }) => {
  const isLogined = useIsLogined();
  return isLogined ? <Navigate to={redirectTo} replace={true} /> : children;
};

export default RestrictedRouteComponent;
