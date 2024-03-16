import { useSelector } from 'react-redux';
import { selectUsersAvatar } from 'redux/authentication/selectors';

export const useUsersAvatar = () => useSelector(selectUsersAvatar);
