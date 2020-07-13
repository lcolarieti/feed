import {DO_SEARCH} from '../constants';

export interface ISearch {
  readonly text: string;
  readonly type: string;
}

export interface SearchState {
  search: ISearch;
}

interface DoSearchAction {
  type: typeof DO_SEARCH;
  payload: ISearch;
}

export type SearchActionTypes = DoSearchAction;