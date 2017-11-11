import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CounterService } from './services/counter.service';


import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { MySecondCounterComponent } from './my-second-counter/my-second-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    MySecondCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
