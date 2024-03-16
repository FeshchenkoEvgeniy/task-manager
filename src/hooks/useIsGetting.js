import { useSelector } from 'react-redux';
import { selectIsGettingCurrentUser } from 'redux/authentication/selectors';

export const useIsGetting = () => useSelector(selectIsGettingCurrentUser);
