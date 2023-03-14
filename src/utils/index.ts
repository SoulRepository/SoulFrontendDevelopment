import { socialMediaTypes } from '@app/types/httpTypes';

export const getImgPath = (imgName: string) => `/images/${imgName}`;

export const debuger = (cb: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    cb();
  }
};

export const getShortAddress = (address: string, start = 6, endCount = 4) =>
  `${address?.slice(0, start)}...${address?.slice(address?.length - (endCount ?? start + 1))}`;

export const getRandomNumber = (min = 1, max = 100) =>
  Math.round(Math.random() * (max - min) + min);

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
    default:
      return link;
  }
};
