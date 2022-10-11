import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrganizationConfigurationService } from './organization-configuration.service';

@Component({
  selector: 'app-organization-configuration',
  templateUrl: './organization-configuration.component.html',
  styleUrls: ['./organization-configuration.component.scss'],
})
export class OrganizationConfigurationComponent implements OnInit {
  

  selectedFiles:File[] = [];

  editForm = this.fb.group({
    id: [],
    name: [null, [Validators.required, Validators.maxLength(255)]],
    slogan: [null, [Validators.maxLength(255)]],
    domainName: [null, [Validators.required, Validators.maxLength(255)]],
    emailAddress: [null, [Validators.required, Validators.maxLength(255)]],
    hrEmailAddress: [null, [Validators.maxLength(255)]],
    noReplyEmailAddress: [null, [Validators.maxLength(255)]],
    contactNumber: [null, [Validators.maxLength(255)]],
    financeManagerPIN: [null, [Validators.maxLength(255)]],
    financeManagerSignature: [],
    svgLogo: [],
    documentLetterHead: [],
    hasOrganizationStamp: [],
    organizationStamp: [],
    linkedin: [null, [Validators.maxLength(255)]],
    twitter: [null, [Validators.maxLength(255)]],
    facebook: [null, [Validators.maxLength(255)]],
    youtube: [null, [Validators.maxLength(255)]],
    instagram: [null, [Validators.maxLength(255)]],
    whatsapp: [null, [Validators.maxLength(255)]],
  });

  constructor(private fb: FormBuilder, protected organizationConfiguration: OrganizationConfigurationService) {}

  ngOnInit() {
    console.log('ee');
  }

  onChange(event: any): void {
    this.selectedFiles = event.target.files;

    const image: any = event.target.files[0];
    //this.size = image.size;
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();

      img.onload = () => {
        //this.width = img.width;
        //this.height = img.height;
      };

      if (typeof fr.result === 'string') {
        img.src = fr.result;
      } // This is the data URL
    };
  }

  onSubmit(): void {
    //this.fileValidationMessage = '';
    if (this.selectedFiles.length > 0) {
      alert('Uploading Id Card');
      this.organizationConfiguration.create(this.selectedFiles).subscribe(() => {
        alert('saved');
      });
    } else {
      alert('No File Selected')
    }
  }

}
