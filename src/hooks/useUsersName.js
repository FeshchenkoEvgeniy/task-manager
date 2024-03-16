import { useSelector } from 'react-redux';
import { selectUsersName } from 'redux/authentication/selectors';

export const useUsersName = () => useSelector(selectUsersName);
