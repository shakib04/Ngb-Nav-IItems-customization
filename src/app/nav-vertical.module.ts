import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationConfigurationComponent } from './location-configuration/location-configuration.component';

import { NgbdNavVertical } from './nav-vertical';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [NgbdNavVertical, LocationConfigurationComponent],
  exports: [NgbdNavVertical],
  bootstrap: [NgbdNavVertical]
})
export class NgbdNavVerticalModule {
}
