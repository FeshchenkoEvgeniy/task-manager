import { Navigate } from 'react-router-dom';
import { useIsGetting, useIsLogined } from 'hooks';

const PrivateRouteComponent = ({ children, redirectTo = '/' }) => {
  const IsLogined = useIsLogined();
  const isGetting = useIsGetting();
  const mustRedirect = !IsLogined && !isGetting;
  return mustRedirect ? <Navigate to={redirectTo} replace={true} /> : children;
};
export default PrivateRouteComponent;
