import {Search, SearchActionTypes} from '../interfaces/search';
import {DO_SEARCH} from '../constants';

export const initialState: Search = {
  text: '',
  type: 'user'
};

const searchReducer = (state = initialState, action: SearchActionTypes): Search => {
  switch (action.type) {
    case DO_SEARCH:
      return action.payload;
    default:
      return state;
  }
}

export default searchReducer;