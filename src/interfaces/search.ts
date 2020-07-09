import {DO_SEARCH} from '../constants';

export interface Search {
  readonly text: string;
  readonly type: string;
}

export interface SearchState {
  search: Search;
}

interface DoSearchAction {
  type: typeof DO_SEARCH;
  payload: Search;
}

export type SearchActionTypes = DoSearchAction;