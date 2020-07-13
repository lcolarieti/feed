import {action} from 'typesafe-actions';
import {DO_SEARCH} from '../constants';
import {ISearch} from '../interfaces/search';

export const doSearch = (search: ISearch) => action(DO_SEARCH, search);