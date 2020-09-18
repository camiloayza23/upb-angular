import {Action, createReducer, on} from '@ngrx/store';
import {AddProduct } from './admin.actions';
export interface HomeState {
  totalAmount: number,
  totalHot: number,
  totalCold: number
}

export const initialState: HomeState = {
  totalAmount: 0,
  totalHot: 0,
  totalCold: 0
};
// Principio de inmutabilidad IMPORTANTE!
const featureReducer = createReducer(
  initialState,
  on(AddProduct, (state) => ({...state, totalAmount: state.totalAmount, totalHot: state.totalHot, totalCold: state.totalCold}))
  );

export function reducer(state: HomeState, action: Action): any {
  return featureReducer(state, action);
}