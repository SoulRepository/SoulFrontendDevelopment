import type {socialMediaTypes} from "@app/types/index";

type Metadata = object

export interface BackgroundImage {
  id: number;
  key: string;
  metadata: Metadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface LogoImage {
  id: number;
  key: string;
  metadata: Metadata;
  createdAt: Date;
  updatedAt: Date;
}


export interface FeaturedImage {
  id: number;
  key: string;
  metadata: Metadata;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICategoryResponse {
  id: number;
  name: string;
  description: string;
  shortName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  soulId: string;
  links: string[];
  backgroundImage: BackgroundImage;
  logoImage: LogoImage;
  featuredImage: FeaturedImage;
  categories: ICategoryResponse[];
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Link {
  id: number;
  type: socialMediaTypes
  url: string;
  verified: boolean
  company?: Company;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICompanyResponse {
  backgroundImageUrl: string;
  logoImageUrl: string;
  featuredImageUrl: string;
  id: number;
  name: string;
  description: string;
  soulId: string;
  links: Link[];
  backgroundImage: string;
  logoImage: string;
  featuredImage: string;
  categories: ICategoryResponse[];
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IDigiProofResponse {
  name: string;
}

export interface ISbtCompany {
  name: string;
  featuredImage?: string;
  logo?: string;
  soulId: string;
  address: string;
  verified: boolean;
}

export interface ISbtCompanyResponse {
  sbtId: string;
  digiProofType: string;
  description: string;
  uri: string;
  companies: ISbtCompany[];
}

// {
//   "description": "string",
//   "soulId": "string",
//   "backgroundImageKey": "string",
//   "logoImageKey": "string",
//   "featuredImageKey": "string",
//   "categoriesIds": [
//   0
// ],
//   "address": "string",
//   "links": [
//   {
//     "type": "twitter",
//     "url": "string"
//   }
// ]
// }
export interface IPatchCompany {
  description?: string;
  soulId?: string;
  backgroundImageKey?: string;
  logoImageKey?: string;
  featuredImageKey?: string;
  address?: string;
  links?: {
    type: socialMediaTypes;
    url: string;
  }[];
  categoriesIds?: number[];
}

export interface IAccessData {
  sign: string;
  message: string;
  address: string;
}

export interface IPatchCompanyRequest {
  soulId: string;
  accessData: IAccessData;
  companyInfo?: IPatchCompany;
}

export interface IFields {
  bucket: string;
  'X-Amz-Algorithm': string;
  'X-Amz-Credential': string;
  'X-Amz-Date': string;
  'X-Amz-Security-Token': string;
  key: string;
  Policy: string;
  'X-Amz-Signature': string;
}

export interface IImageCredentialData {
  url: string;
  fields: IFields;
}

export interface IImageCredentialResponse {
  background?: IImageCredentialData;
  featured?: IImageCredentialData;
  logo?: IImageCredentialData;
}
