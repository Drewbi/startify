import * as faker from 'faker';
import * as _ from 'lodash';

import fakeSentences from './../assets/PhraseData';

export interface FakeData {
  companyName: string;
  companyBs: [
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
}

const generateRandomInteger = (max: number) =>
  Math.floor(1 + Math.random() * max);

export function getFakeData(seed: number): FakeData {
  faker.seed(seed);

  const companyBs = _.map(_.range(3), () => {
    const title = faker.company.bs();
    const bodyText = fakeSentences[generateRandomInteger(22)];

    return {
      title,
      bodyText,
    };
  });

  const companyCatchPhrase = _.map(_.range(3), () => {
    const title = faker.company.catchPhrase();
    const bodyText = fakeSentences[generateRandomInteger(22)];

    return {
      title,
      bodyText,
    };
  });

  const fakeData: FakeData = {
    companyName: faker.company.companyName(),
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
  };

  return fakeData;
}
