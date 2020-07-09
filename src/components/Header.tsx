import React, {ChangeEvent, useReducer} from 'react';
import {doSearch} from '../actions/search';
import {initialState} from '../reducers/search';
import searchReducer from '../reducers/search';


interface SearchType {
  text: string;
  value: string;
}

const Header: React.FC = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  const selects: SearchType[] = [
    {text: 'User', value: 'user'},
    {text: 'Content', value: 'content'},
  ];

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) =>  {
    dispatch(doSearch({type: state.type, text: event.target.value.trim()}));
  };

  const handleSearchTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === state.type) return;
    dispatch(doSearch({type: event.target.value, text: state.text}));
  };

  return (
    <header>
      <div className="main-content">
        <div className="right">
          <input
            type="text"
            placeholder="Search by..."
            value={state.text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchTextChange(e)}
          />
          <select
            defaultValue={state.type}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSearchTypeChange(e)}
          >
            {
              selects.map(select => <option
                key={select.value}
                value={select.value}>
                {select.text}
              </option>)
            }
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;