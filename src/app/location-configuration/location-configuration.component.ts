import { error } from '@angular/compiler-cli/src/transformers/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ILocationConfig, LocationConfig } from './location-config';
import { LocationConfigService } from './location-config.service';

@Component({
  selector: 'app-location-configuration',
  templateUrl: './location-configuration.component.html',
  styleUrls: ['./location-configuration.component.css']
})
export class LocationConfigurationComponent implements OnInit {

 locationConfig!: ILocationConfig;

  editForm = this.fb.group({
    locationCodePrefixId: [Validators.required],
    locationCodePrefix: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]],
    locationCodePostfixId: [Validators.required],
    locationCodePostfix: [null, [Validators.minLength(1), Validators.maxLength(255)]],
    lastLocationId: [Validators.required],
  });
  constructor(private fb: FormBuilder, protected locationConfigService: LocationConfigService) { }

  ngOnInit() {
    // load data by api calling, get locationCodePrefixId, locationCodePrefix from ///config table
    this.loadConfigData();
  }

  
  loadConfigData():void{
    this.locationConfigService.getLocationConfig().subscribe(res => {
      this.locationConfig = res.body!;
      console.log(res.body!)
      this.editForm.get(['locationCodePrefix'])!.setValue(this.locationConfig.locationCodePrefix);
      this.editForm.get(['locationCodePostfix'])!.setValue(this.locationConfig.locationCodePostfix);
    })
  }

  save():void{
    const locationConfig = this.createFromForm();
    this.locationConfigService.saveLocationConfig(locationConfig).subscribe(res => {
      alert('saved!')
    }, error => {
      alert('failed to save!')
    })
  }

  private createFromForm(): ILocationConfig {
    return {
      ...new LocationConfig(),
      locationCodePrefix: this.editForm.get(['locationCodePrefix'])!.value,
      locationCodePostfix: this.editForm.get(['locationCodePostfix'])!.value
    }
  }
}