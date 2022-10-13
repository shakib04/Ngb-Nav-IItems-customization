import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrganizationConfigurationService } from './organization-configuration.service';
import { OrganizationFileType } from './organization-file-type.enum';
import { IOrganization, Organization } from './organization-model';

@Component({
  selector: 'app-organization-configuration',
  templateUrl: './organization-configuration.component.html',
  styleUrls: ['./organization-configuration.component.scss'],
})
export class OrganizationConfigurationComponent implements OnInit {
  
  active = 'middle';

  selectedFiles:File[] = [];
  selectedFileTypes: OrganizationFileType[] = []

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

  private createFromForm(): IOrganization {
    return {
      ...new Organization(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      slogan: this.editForm.get(['slogan'])!.value,
      domainName: this.editForm.get(['domainName'])!.value,
      emailAddress: this.editForm.get(['emailAddress'])!.value,
      hrEmailAddress: this.editForm.get(['hrEmailAddress'])!.value,
      noReplyEmailAddress: this.editForm.get(['noReplyEmailAddress'])!.value,
      contactNumber: this.editForm.get(['contactNumber'])!.value,
      financeManagerPIN: this.editForm.get(['financeManagerPIN'])!.value,
      financeManagerSignature: this.editForm.get(['financeManagerSignature'])!.value,
      svgLogo: this.editForm.get(['svgLogo'])!.value,
      documentLetterHead: this.editForm.get(['documentLetterHead'])!.value,
      hasOrganizationStamp: this.editForm.get(['hasOrganizationStamp'])!.value,
      organizationStamp: this.editForm.get(['organizationStamp'])!.value,
      linkedin: this.editForm.get(['linkedin'])!.value,
      twitter: this.editForm.get(['twitter'])!.value,
      facebook: this.editForm.get(['facebook'])!.value,
      youtube: this.editForm.get(['youtube'])!.value,
      instagram: this.editForm.get(['instagram'])!.value,
      whatsapp: this.editForm.get(['whatsapp'])!.value,
    };
  }

  onChange(event: any, organizationFileType: string): void {
    this.selectedFiles.push(event.target.files[0])
    this.selectedFileTypes.push(OrganizationFileType[organizationFileType])

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
      this.organizationConfiguration.create(this.selectedFiles, this.selectedFileTypes).subscribe(() => {
        alert('saved');
      });
    } else {
      alert('No File Selected')
    }
  }

}
