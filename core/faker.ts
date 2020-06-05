import * as faker from 'faker';
import * as _ from 'lodash';

import fakeSentences from '../assets/PhraseData';
import ImageList from '../assets/ImageList';
import IllustrationList from '../assets/IllustrationList';

const companyTypes = [
  {
    label: 'Corporate',
    shortName: 'corp',
    value: '1',
  },
  {
    label: 'Technology',
    shortName: 'tech',
    value: '2',
  },
  {
    label: 'AI',
    shortName: 'ai',
    value: '3',
  },
];

export interface FakeData {
  companyName: string;
  companyType: number;
  companyBs: [
    {
      title: string;
      bodyText: string;
    },
    {
      title: string;
      bodyText: string;
    },
    {
      title: string;
      bodyText: string;
    },
  ];
  companyCatchPhrase: [
    {
      title: string;
      bodyText: string;
    },
    {
      title: string;
      bodyText: string;
    },
    {
      title: string;
      bodyText: string;
    },
  ];
  address: {
    streetAddress: string;
    streetName: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  phoneNumber: string;
  person: {
    name: string;
    suffix: string;
    title: string;
  };
  images: string[];
  illustrations: string[];
}

const generateRandomInteger = (max: number) =>
  (1 + faker.random.number()) % max;

export function getFakeData(seed: number, type: number): FakeData {
  faker.seed(seed);
  const companyBs = _.map(_.range(3), () => {
    const title = faker.company.bs();
    const bodyText =
      fakeSentences[generateRandomInteger(fakeSentences.length - 1)];

    return {
      title,
      bodyText,
    };
  });

  const companyCatchPhrase = _.map(_.range(3), () => {
    const title = faker.company.catchPhrase();
    const bodyText =
      fakeSentences[generateRandomInteger(fakeSentences.length - 1)];

    return {
      title,
      bodyText,
    };
  });

  const lengthOfImageData =
    ImageList[companyTypes[type - 1].shortName].length - 1;

  const pickedIllustrations = [...Array(4)].map(
    () => IllustrationList[generateRandomInteger(IllustrationList.length - 1)],
  );

  const suffix = [
    'ify',
    'io',
    'r',
    '.io',
    'igo',
    'ster',
    'eo',
    'pay',
    'ly',
    'ee',
  ];
  const prefix = [
    'i',
    'X.',
    'Fin',
    'Air',
    'Deep',
    'Bit',
    'Mind',
    'Data',
    'Cloud',
    'Open',
    'Zy',
    'Alpha-',
    'Neura',
    'AI',
    'In',
  ];

  const generateCompanyName = () => {
    let word = faker.random.word();
    if (word.length > 5 && type === 2) {
      word = word.slice(0, -2);
    }
    const re = /\w+?(?=[aeiou]*$|er|ing)/;
    const matches = word.match(re);
    word = matches[0];
    if (type === 3) {
      const randomPrefix = generateRandomInteger(prefix.length);
      return prefix[randomPrefix] + word;
    }
    const randomSuffix = generateRandomInteger(suffix.length);
    return word + suffix[randomSuffix];
  };

  const companyName =
    type === 1 ? faker.company.companyName() : generateCompanyName();

  const fakeData: FakeData = {
    companyName,
    companyType: type,
    companyBs,
    companyCatchPhrase,
    address: {
      streetAddress: faker.address.streetAddress(),
      streetName: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
    },
    phoneNumber: faker.phone.phoneNumber(),
    person: {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      suffix: faker.name.suffix(),
      title: faker.name.jobTitle(),
    },
    images: [
      ImageList[companyTypes[type - 1].shortName][
        generateRandomInteger(lengthOfImageData)
      ],
      ImageList[companyTypes[type - 1].shortName][
        generateRandomInteger(lengthOfImageData)
      ],
    ],
    illustrations: pickedIllustrations,
  };

  return fakeData;
}
