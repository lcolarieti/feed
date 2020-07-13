import {SET_LOADING} from '../constants';


export interface ILoading {
  active: boolean
}

export interface LoadingState {
  loading: ILoading;
}

interface setLoadingAction {
  type: typeof SET_LOADING;
  payload: ILoading;
}

export type LoadingActionTypes = setLoadingAction;