import {
    ActionReducer,
    MetaReducer,
  } from '@ngrx/store';
  
  import {storeFreeze} from 'ngrx-store-freeze';
  import {storeLogger} from 'ngrx-store-logger';
  import {environment} from '../../environments/environment';
  
  export function logger(reducer: ActionReducer<any>): any {
    return storeLogger()(reducer);
  }
  
  export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze, logger]
    : [];