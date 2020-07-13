import {SET_LOADING} from '../constants';
import {ILoading, LoadingActionTypes} from '../interfaces/loading';

export const initialState: ILoading = {
  active: true
};

const loadingReducer = (state = initialState, action: LoadingActionTypes): ILoading => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
}

export default loadingReducer;