import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrushComponent } from './componentes/crush/crush.component';
import { ConfigComponent } from './componentes/config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    CrushComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
