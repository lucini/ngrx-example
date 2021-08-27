import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, state => state++),
    on(decrement, state => state--),
    on(reset, _ => initialState)
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
