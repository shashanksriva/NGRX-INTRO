import { Action, createReducer, on } from "@ngrx/store";
import { decrementCounter, incrementCounter, set } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(incrementCounter, (state, action) => state + action.value),
    on(decrementCounter, (state, action) => state - action.value),
    on(set, (state, action) => action.value),
);

// export const decrementCounterReducer = createReducer(
//     initialState,
//     on(decrementCounter, (state) => state - 1)
// );

// export function counterReducer(state = initialState, action: CounterActions | Action) {
//     if (action.type === '[Counter] Increment') {
//         return state + (action as IncrementAction).value;
//     }
//     return state;
// }