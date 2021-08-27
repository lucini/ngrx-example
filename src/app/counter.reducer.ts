import { createReducer, on } from '@ngrx/store';
import { decrement, double, increment, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(double, state => state * 2),
    on(decrement, state => state - 1),
    on(reset, _ => initialState)
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}
