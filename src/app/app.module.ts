import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponentComponent } from './hotels/hotel-component/hotel-component.component';
import { HotelsListingComponent } from './hotels/hotels-listing/hotels-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponentComponent,
    HotelsListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
