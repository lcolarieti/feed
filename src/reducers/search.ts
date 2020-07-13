import {ISearch, SearchActionTypes} from '../interfaces/search';
import {DO_SEARCH} from '../constants';

export const initialState: ISearch = {
  text: '',
  type: 'user'
};

const searchReducer = (state = initialState, action: SearchActionTypes): ISearch => {
  switch (action.type) {
    case DO_SEARCH:
      return action.payload;
    default:
      return state;
  }
}

export default searchReducer;