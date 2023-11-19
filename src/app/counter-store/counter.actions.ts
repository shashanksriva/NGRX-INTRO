import { Action, createAction, props } from "@ngrx/store";

export const incrementCounter = createAction(
    '[Counter] Increment',
    props<{value: number}>()
);

export const decrementCounter = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
); 

export const init = createAction(
    '[Counter] Init'
);

export const set = createAction(
    '[Counter] Set',
    props<{value: number}>()
)

// export class IncrementAction implements Action {

//     readonly type = '[Counter] Increment';

//     constructor(public value: number) {

//     }
// }

// export class DecrementAction implements Action {
//     readonly type = '[Counter] Decrement';
//     constructor(public value: number) {

//     }
// }

// export type CounterActions = IncrementAction; //| DecrementAction