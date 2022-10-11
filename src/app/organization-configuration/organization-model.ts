export interface IOrganization {
  id?: number;
  name?: string;
  slogan?: string;
  domainName?: string;
  emailAddress?: string;
  hrEmailAddress?: string;
  noReplyEmailAddress?: string;
  contactNumber?: string;
  financeManagerPIN?: string;
  financeManagerSignature?: any;
  svgLogo?: any;
  documentLetterHead?: any;
  hasOrganizationStamp?: boolean;
  organizationStamp?: any;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  youtube?: string;
  instagram?: string;
  whatsapp?: string;
}

export class Organization implements IOrganization {
  constructor(
    public id?: number,
    public name?: string,
    public slogan?: string,
    public domainName?: string,
    public emailAddress?: string,
    public hrEmailAddress?: string,
    public noReplyEmailAddress?: string,
    public contactNumber?: string,
    public financeManagerPIN?: string,
    public financeManagerSignature?: any,
    public svgLogo?: any,
    public documentLetterHead?: any,
    public hasOrganizationStamp?: boolean,
    public organizationStamp?: any,
    public linkedin?: string,
    public twitter?: string,
    public facebook?: string,
    public youtube?: string,
    public instagram?: string,
    public whatsapp?: string
  ) {
    this.hasOrganizationStamp = this.hasOrganizationStamp || false;
  }
}
