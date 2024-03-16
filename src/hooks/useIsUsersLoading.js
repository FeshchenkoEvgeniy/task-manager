import { useSelector } from 'react-redux';
import { selectIsUsersLoading } from 'redux/authentication/selectors';

export const useIsUsersLoading = () => useSelector(selectIsUsersLoading);
