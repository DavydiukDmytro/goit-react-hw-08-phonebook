import { Input, Label } from 'components/FormAddContact/FormAddContact.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterValue } from 'store/filter/filterSlice';
import { selectFilter } from 'store/filter/selectorsFilter';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleClick = ({ target: { value } }) => {
    dispatch(updateFilterValue(value));
  };
  return (
    <>
      <Label>
        Find contacts by name
        <Input
          value={filter}
          type="text"
          name="filter"
          onChange={handleClick}
        />
      </Label>
    </>
  );
};
