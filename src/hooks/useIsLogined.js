import { useSelector } from 'react-redux';
import { selectIsLogined } from 'redux/authentication/selectors';

export const useIsLogined = () => useSelector(selectIsLogined);
