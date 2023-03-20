import type { socialMediaTypes } from '@app/types';
import { IImageCredentialData } from '@app/types/httpTypes';
import axios from 'axios';

export const getImgPath = (imgName: string) => `/images/${imgName}`;

export const debuger = (cb: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    cb();
  }
};

export const getShortAddress = (address: string, start = 6, endCount = 4) =>
  `${address?.slice(0, start)}...${address?.slice(address?.length - (endCount ?? start + 1))}`;

export const transformLinkToName = (link: string, type: socialMediaTypes) => {
  switch (type) {
    case 'twitter': {
      const regex = /(?:https?:\/\/)?(?:www\.)?twitter\.com\/(\w+)/i;
      const res = link.match(regex);

      return res ? res[1] : link;
    }
    case 'instagram': {
      const regex = /(?:https?:\/\/)?(?:www\.)?instagram\.com\/(\w+)/i;
      const res = link.match(regex);

      return res ? res[1] : link;
    }

    case 'discord': {
      const regex = /(?:https?:\/\/)?(?:www\.)?discordapp\.com\/users\/(\w+)/i;
      const res = link.match(regex);

      return res ? res[1] : link;
    }
    default:
      return link;
  }
};


export const formatDate = (data: string | Date) => {
  const date = new Date(data);
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${year}`
}

export const formatDateV2 = (data: string | Date) => {
  const date = new Date(data);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();



  return `${day}/${month}/${year}`
}

export const windowOpen = (url?: string | URL, target?: string) => {
  const width = 450;
  const height = 730;
  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  window.open(
    url,
    target,
    'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
    width +
    ', height=' +
    height +
    ', top=' +
    top +
    ', left=' +
    left,
  );
};
export const oauthUrlFactory = (
  url: string,
  {
    state,
    clientId = '',
    scope,
    redirectUri = window.location.origin + '/auth',
    response_type = 'code',
  }: {
    clientId?: string;
    scope: string;
    state: string;
    redirectUri?: string;
    response_type?: string;
  },
) => {
  const oauthUrl = new URL(url);

  oauthUrl.searchParams.set('client_id', clientId);
  oauthUrl.searchParams.set('scope', scope);
  oauthUrl.searchParams.set('redirect_uri', redirectUri);
  oauthUrl.searchParams.set('response_type', response_type);
  oauthUrl.searchParams.set('state', state);

  return oauthUrl;
};

export const sendImageToAWS = async (data?: IImageCredentialData, imageFile?: File) => {
  if (!data || !imageFile) {
    return void 0;
  }

  const formData = new FormData();
  Object.entries(data.fields).forEach(([key, value]) => {
    formData.set(key, value);
  });
  formData.set('Content-Type', imageFile.type);
  formData.set('file', imageFile);
  try {
    await axios.post(data.url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data.fields.key;
  } catch (e) {
    console.log(e);
  }
};
