import { getImgPath } from '@app/utils';
import {
  DiscordStaticIcon,
  InstaStaticIcon,
  SiteIcon,
  TwitterStaticIcon,
} from '@app/components/ui/icons';

export const digiProofsIcon = [
  getImgPath('coinbase.png'),
  getImgPath('gost.png'),
  getImgPath('led.png'),
];

export const tags = [
  {
    title: 'BT',
    desc: 'Blockchain technology',
  },
  {
    title: 'CPT',
    desc: 'Cryptocurrency',
  },
  {
    title: 'DeFi',
    desc: 'Decentralized finance ',
  },
  {
    title: 'Web3 G',
    desc: 'Web3 Gaming',
  },
];

export const socialMediaLinks = [
  {
    label: '@WomenriseNFT',
    type: 'twitter',
    icon: TwitterStaticIcon,
    link: '#',
    isVerify: true,
  },
  {
    label: '@womenrisenft',
    type: 'instagram',
    icon: InstaStaticIcon,
    link: '#',
    isVerify: false,
  },
  {
    label: 'womenrise.art',
    type: 'site',
    icon: SiteIcon,
    link: '#',
  },
  {
    label: 'discord.com',
    type: 'discord',
    icon: DiscordStaticIcon,
    link: '#',
    isVerify: true,
  },
];

export const digiProofsTypes = [
  {
    id: '1',
    name: 'Partnerships',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
  {
    id: '2',
    name: 'Collaborations',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
  {
    id: '3',
    name: 'Investors',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
  {
    id: '4',
    name: 'Team Members',
    description:
      'Women Rise is an art project. It is a collection of 10,000 unique art NFT’s that are representing and celebrating',
  },
];

export const relationshipsCompany = {
  partnerships: [
    {
      featuredImage: 'coinbase_feature_image.jpg',
      name: 'Coinbase',
      sbtId: 'coinbase.soul',
      verification: true,
    },
    {
      featuredImage: 'ledger_feature_image.jpg',
      name: 'Ledger',
      sbtId: 'ledger.soul',
      verification: false,
    },
    {
      featuredImage: 'rarible_feature_image.jpg',
      name: 'Rarible',
      sbtId: 'rarible.soul',
      verification: true,
    },
    {
      featuredImage: 'rarible_feature_image.jpg',
      name: 'Rarible',
      sbtId: 'rarible.soul',
      verification: true,
    },
  ],
  collaborations: [
    {
      featuredImage: 'rarible_feature_image.jpg',
      name: 'Rarible',
      sbtId: 'rarible.soul',
      verification: true,
    },
    {
      featuredImage: 'ledger_feature_image.jpg',
      name: 'Ledger',
      sbtId: 'ledger.soul',
      verification: false,
    },
  ],
  investors: [
    {
      featuredImage: 'coinbase_feature_image.jpg',
      name: 'Coinbase',
      sbtId: 'coinbase.soul',
      verification: true,
    },
  ],
  'team members': [],
};

export const relationships = [
  {
    companyName: 'Ledger',
    relationshipType: 'partnership',
    featuredImage: getImgPath('ledger_feature_image.jpg'),
    created: '8/03/2022',

    properties:
      'Rarible partnered with artist Maliha Abidi back in November because they loved her vision of highlighting female scientists, activists, artists, coders and more.',
    relationshipsCompany: [
      {
        featureImg: getImgPath('coinbase_feature_image.jpg'),
        name: 'women rise',
        isVerify: true,
      },
      {
        featureImg: '',
        name: 'women rise',
        isVerify: true,
      },
      {
        featureImg: getImgPath('rarible_feature_image.jpg'),
        name: 'rarible',
        isVerify: true,
      },
    ],
  },
  {
    companyName: 'Coinbase',
    relationshipType: 'collaborations',
    featuredImage: getImgPath('coinbase_feature_image.jpg'),
    created: '8/03/2022',

    properties:
      'Rarible partnered with artist Maliha Abidi back in November because they loved her vision of highlighting female scientists, activists, artists, coders and more.',
    relationshipsCompany: [
      {
        featureImg: getImgPath('rarible_feature_image.jpg'),
        name: 'rarible',
        isVerify: false,
      },
      {
        featureImg: getImgPath('default-avatar.jpg'),
        name: 'women rise',
        isVerify: true,
      },
    ],
  },
  {
    companyName: 'Rarible',
    relationshipType: 'investors',
    featuredImage: getImgPath('rarible_feature_image.jpg'),
    created: '8/03/2022',

    properties:
      'Rarible partnered with artist Maliha Abidi back in November because they loved her vision of highlighting female scientists, activists, artists, coders and more.',
    relationshipsCompany: [
      {
        featureImg: getImgPath('coinbase_feature_image.jpg'),
        name: 'women rise',
        isVerify: true,
      },
      {
        featureImg: getImgPath('ledger_feature_image.jpg'),
        name: 'rarible',
        isVerify: false,
      },
      {
        featureImg: getImgPath('rarible_feature_image.jpg'),
        name: 'rarible',
        isVerify: true,
      },
    ],
  },
];
