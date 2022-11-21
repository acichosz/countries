import { ICountryName } from "./countryName.model";
import { IFlag } from "./flag.model";

export interface ICountry {
  flags: IFlag;
  name: ICountryName;
  capital: Array<string>;
  altSpellings: Array<string>;
}
