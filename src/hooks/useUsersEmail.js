import { useSelector } from 'react-redux';
import { selectUsersEmail } from 'redux/authentication/selectors';

export const useUsersEmail = () => useSelector(selectUsersEmail);
