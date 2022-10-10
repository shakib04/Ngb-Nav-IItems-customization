import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationConfigurationComponent } from './location-configuration/location-configuration.component';

import { NgbdNavVertical } from './nav-vertical';
import { LocationConfigService } from './location-configuration/location-config.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, NgbModule, ReactiveFormsModule, HttpClientModule],
  declarations: [NgbdNavVertical, LocationConfigurationComponent],
  exports: [NgbdNavVertical],
  bootstrap: [NgbdNavVertical],
  providers: [LocationConfigService]
})
export class NgbdNavVerticalModule {
}
