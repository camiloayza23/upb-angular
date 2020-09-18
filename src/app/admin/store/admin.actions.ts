/* Action {type: '', payload: {llave:4}} */

import {createAction, props} from '@ngrx/store';

export const AddProduct = createAction('[HOME]AddProduct', props<{total:number,cold:number,hot:number}>());