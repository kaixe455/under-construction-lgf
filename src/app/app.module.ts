import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TwitterFeedComponent } from './componentes/twitter-feed/twitter-feed.component';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { CuentaAtrasComponent } from './componentes/cuenta-atras/cuenta-atras.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterFeedComponent,
    CuentaAtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxTwitterTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
