import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

import { useAppThemes, useUsersId } from 'hooks';
import { editUserTheme } from 'redux/authentication/operations';
import { selectStyles } from './ThemeDropdown.styled';

function ThemeDropdown() {
  const dispatch = useDispatch();
  const userId = useUsersId();

  const defaultValues = {
    theme: useAppThemes(),
  };

  const currentTheme = useAppThemes();

  const { register } = useForm({ defaultValues: defaultValues });
  const [selectedOption, setSelectedOption] = useState(null);
  const [optionValue, setOptionValue] = useState(null);

  const options = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
  ];

  useEffect(() => {
    if (optionValue === null) {
      setOptionValue(currentTheme);
    }
  }, [currentTheme, optionValue]);

  const onChange = option => {
    setOptionValue(option);
    setSelectedOption(null);
    if (option && option.value !== '') {
      const userData = { id: userId, body: { theme: option.value } };

      const userDataTheme = userData.body.theme;

      setOptionValue(userDataTheme);
      dispatch(editUserTheme(userData));
    }
  };

  const themeSelectStyles = selectStyles(selectedOption, optionValue);

  return (
    <div>
      <Select
        name="theme"
        {...register('theme')}
        onChange={onChange}
        options={options}
        styles={themeSelectStyles}
        placeholder="Обрати тему"
        isSearchable={false}
        value={selectedOption}
        // menuIsOpen={true}
      />
    </div>
  );
}

export default ThemeDropdown;
