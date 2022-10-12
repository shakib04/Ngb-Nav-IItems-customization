import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrganization } from './organization-model';
import { OrganizationFileType } from './organization-file-type.enum';
@Injectable()
export class OrganizationConfigurationService {
  public resourceUrl = 'http://localhost:8080' + '/api/configs/organizations';

  constructor(protected http: HttpClient) {}

  create(files: File[], organizationFileTypes: OrganizationFileType[]): Observable<HttpResponse<IOrganization>> {
    console.log(files);
    const organization = {
      contactNumber: 'string',
      documentLetterHead: 'string',
      domainName: 'string',
      emailAddress: 'string',
      facebook: 'string',
      financeManagerPIN: 'string',
      financeManagerSignature: 'string',
      hasOrganizationStamp: true,
      hrEmailAddress: 'string',
      instagram: 'string',
      linkedin: 'string',
      name: 'string',
      noReplyEmailAddress: 'string',
      organizationStamp: 'string',
      slogan: 'string',
      svgLogo: 'string',
      twitter: 'string',
      whatsapp: 'string',
      youtube: 'string',
    };

    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    // organizationFileTypeList.push("FINANCEMANAGERSIGNATURE");
    // organizationFileTypeList.push("SVGLOGO");

    organization["organizationFileTypeList"] = organizationFileTypes;
    console.log(organization);

    formData.append(
      'organizationDTO',
      new Blob([JSON.stringify(organization)], { type: 'application/json' })
    );

    console.log(formData);

    return this.http.post<IOrganization>(this.resourceUrl, formData, {
      headers: {
        //'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('admin:admin'),
      },
      observe: 'response',
    });
  }

  uploadImageFiles(files: File[]): Observable<boolean> {
    console.log(files[0].name);
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i]);
    }
    return this.http.post<boolean>(
      'http://localhost:8080/api/employee-mgt/import-image-upload',
      formData,
      {
        headers: {
          //'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('admin:admin'),
        },
      }
    );
  }
}
