import { FilterModalWindow, FilterTitle } from './FilterModal.styled';
import FilterLabels from '../FilterLabels/FilterLabels';
import FilterBackgrounds from '../FilterBackgrounds/FilterBackgrounds';

const FilterModal = ({ onClose }) => {
  return (
    <FilterModalWindow>
      <FilterTitle>Фільтри</FilterTitle>
      <FilterBackgrounds />
      <FilterLabels onClose={onClose} />
    </FilterModalWindow>
  );
};

export default FilterModal;
