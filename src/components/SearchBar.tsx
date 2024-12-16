import { ChangeEvent, useState, useCallback } from 'react';
import debounce from '../hooks/debounce';
import { UserSearchBarProps } from '../types/user';

const SearchBar: React.FC<UserSearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, 500),
    [onSearch]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  return (
    <input
      className='user-search'
      type="text"
      placeholder="Filter by name..."
      value={inputValue}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
