import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, CardComponent, SafePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyCSUlRQMMCj1CtSiMs5mBHTC-vq2T996uo'
     })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
