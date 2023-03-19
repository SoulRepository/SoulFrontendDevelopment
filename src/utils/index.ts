import { socialMediaTypes } from '@app/types/httpTypes';

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
