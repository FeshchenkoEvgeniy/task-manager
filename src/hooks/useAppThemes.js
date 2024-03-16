import { useSelector } from 'react-redux';
import { selectThemes } from 'redux/authentication/selectors';

export const useAppThemes = () => useSelector(selectThemes);
