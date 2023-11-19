import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrementCounter, incrementCounter } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(() =>
    this.actions$.pipe(
      ofType(incrementCounter, decrementCounter),
      withLatestFrom(this.store.select(selectCount)),
      tap(([action, counter]) => {
        console.log(action);
        localStorage.setItem('count', counter.toString());
      })
    ),
    { dispatch: false}
  );

  constructor(private actions$: Actions, private store: Store<{counter: number}>) {}
}
