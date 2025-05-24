import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [debounce] = useDebounce(query, 500);
  const dispatch = useDispatch();
  const queryLocation = useSelector(
    (state) => state.contactFilterReducer.searchQuery,
  );

  // setQuery(queryLocation);

  const inputChange = (event) => {
    dispatch(changeFilter(event.target.value));
    // setQuery(event.target.value);
  };

  // useEffect(() => {
  //   setQuery(queryLocation);
  //   dispatch(changeFilter(debounce));
  // }, [debounce]);

  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        type="text"
        value={queryLocation}
        onChange={inputChange}
        id="searchBox"
        autoFocus
      />
    </div>
  );
}
