import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementCounter, incrementCounter } from '../counter-store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(incrementCounter({value: 2}));
  }

  decrement() {
    this.store.dispatch(decrementCounter({value: 2}));
  }
}
