import React, {ChangeEvent} from 'react';
import {doSearch} from '../actions/search';
import {ISearch} from '../interfaces/search';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../reducers/combineReducers';


interface SearchType {
  text: string;
  value: string;
}

const mapStateToProps = (state: RootState) => ({
  search: state.search
})

const mapDispatchToProps = {
  doSearchAction: (search: ISearch) => doSearch(search)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux;

const Header: React.FC<Props> = (props: Props) => {

  const selects: SearchType[] = [
    {text: 'User', value: 'user'},
    {text: 'Content', value: 'content'},
  ];

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) =>  {
    props.doSearchAction({type: props.search.type, text: event.target.value});
  };

  const handleSearchTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === props.search.type) return;
    props.doSearchAction({type: event.target.value, text: ''});
  };

  return (
    <header>
      <div className="main-content">
        <div className="right">
          <input
            type="text"
            placeholder="Search by..."
            value={props.search.text}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearchTextChange(e)}
          />
          <select
            defaultValue={props.search.type}
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

export default connector(Header);