import {Action, createReducer, on} from '@ngrx/store';
import {AddProduct } from './home.actions';
export interface HomeState {
  items: any;
  totalAmount: number;
}

export const initialState: HomeState = {
  items: [],
  totalAmount: 0
};
// Principio de inmutabilidad IMPORTANTE!
const featureReducer = createReducer(
  initialState,
  on(AddProduct, (state, {product}) => ({...state, items: state.items.concat([product])}))
  );

export function reducer(state: HomeState, action: Action): any {
  return featureReducer(state, action);
}