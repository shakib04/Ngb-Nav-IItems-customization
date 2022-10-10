export interface ILocationConfig {
  locationCodePrefix?: string;
  locationCodePostfix?: string;
}

export class LocationConfig implements ILocationConfig{
  constructor(public locationCodePrefix?: string,
    public locationCodePostfix?: string){}
}