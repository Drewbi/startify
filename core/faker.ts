import * as faker from 'faker';

interface FakeData {
  companyName: string;
  address: {
    streetAddress: string;
    streetName: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  phoneNumber: string;
}

export function getFakeData(seed: number): FakeData {
  faker.seed(seed);

  const fakeData: FakeData = {
    companyName: faker.company.companyName(),
    address: {
      streetAddress: faker.address.streetAddress(),
      streetName: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      zipCode: faker.address.zipCode(),
    },
    phoneNumber: faker.phone.phoneNumber(),
  };

  return fakeData;
}
