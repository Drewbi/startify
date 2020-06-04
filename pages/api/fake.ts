import { NextApiRequest, NextApiResponse } from 'next';
import { getFakeData } from '../../core/faker';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const fakeData = getFakeData(123);
  res.status(200).json(fakeData);
};
