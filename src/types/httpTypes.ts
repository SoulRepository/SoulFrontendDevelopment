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
  type: string;
  url: string;
  company: Company;
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


