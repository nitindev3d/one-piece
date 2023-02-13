import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StrawHatComponent } from './straw-hat/straw-hat.component';
import { PirateDetailsComponent } from './pirate-details/pirate-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StrawHatComponent,
    PirateDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
