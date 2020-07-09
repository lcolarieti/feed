import {action} from 'typesafe-actions';
import {DO_SEARCH} from '../constants';
import {Search} from '../interfaces/search';

export const doSearch = (search: Search) => action(DO_SEARCH, search);