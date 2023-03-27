export interface IMenuItem {
  label: string;
  link: string;
}

export interface IOption {
  label: string;
  value: string | number;
}

export type socialMediaTypes = 'twitter' | 'instagram' | 'discord' | 'site';

export interface IMetaData {
  message: string;
  signature: string;
  soulId: string;
  account: string;
}
