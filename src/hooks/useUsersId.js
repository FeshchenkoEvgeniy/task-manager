import { useSelector } from 'react-redux';
import { selectUsersId } from 'redux/authentication/selectors';

export const useUsersId = () => useSelector(selectUsersId);
