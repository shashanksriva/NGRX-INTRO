import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter-store/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({
    counter: counterReducer,
    //auth: authReducer,
  }), 
  EffectsModule.forRoot([CounterEffects])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
