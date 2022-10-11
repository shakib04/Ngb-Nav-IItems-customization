import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IOrganization } from './organization-model';
@Injectable()
export class OrganizationConfigurationService {
  public resourceUrl = 'http://localhost:8080' + '/api/configs/organization';

  constructor(protected http: HttpClient) {}

  create(files: File[]): Observable<HttpResponse<IOrganization>> {
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
      formData.append('file', files[i]);
    }

    formData.append(
      'organization',
      new Blob([JSON.stringify(organization)], { type: 'application/json' })
    );
    return this.http.post<IOrganization>(this.resourceUrl, formData, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('admin:admin'),
      },
      observe: 'response',
    });
  }
}
