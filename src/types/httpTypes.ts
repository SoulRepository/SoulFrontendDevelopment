type Metadata = object

export type socialMediaTypes = 'twitter' | 'instagram' | 'discord' | 'site'

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

export interface Category {
  id: number;
  name: string;
  description: string;
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
  categories: Category[];
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Link {
  id: number;
  type: socialMediaTypes
  url: string;
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
  backgroundImage: BackgroundImage;
  logoImage: LogoImage;
  featuredImage: FeaturedImage;
  categories: Category[];
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
}

export interface ISbtCompanyResponse {
  sbtId: string;
  digiProofType: string;
  description: string;
  uri: string;
  companies: ISbtCompany[];
}

