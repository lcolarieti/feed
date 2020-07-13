import {action} from 'typesafe-actions';
import { SET_LOADING} from '../constants';
import {ILoading} from '../interfaces/loading';

export const setLoading = (loading: ILoading) => action(SET_LOADING, loading);