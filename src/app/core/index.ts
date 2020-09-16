import {ActionReducerMap} from '@ngrx/store';
import * as fromHome from '../pages/home/store/home.reducer'

export const reducers: ActionReducerMap<any> = {
    home: fromHome.reducer
};