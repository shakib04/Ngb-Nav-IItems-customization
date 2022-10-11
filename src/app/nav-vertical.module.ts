import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationConfigurationComponent } from './location-configuration/location-configuration.component';

import { NgbdNavVertical } from './nav-vertical';
import { LocationConfigService } from './location-configuration/location-config.service';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationConfigurationComponent } from './organization-configuration/organization-configuration.component';
import { OrganizationConfigurationService } from './organization-configuration/organization-configuration.service';

@NgModule({
  imports: [BrowserModule, NgbModule, ReactiveFormsModule, HttpClientModule],
  declarations: [NgbdNavVertical, LocationConfigurationComponent, OrganizationConfigurationComponent],
  exports: [NgbdNavVertical],
  bootstrap: [NgbdNavVertical],
  providers: [LocationConfigService, OrganizationConfigurationService]
})
export class NgbdNavVerticalModule {
}
