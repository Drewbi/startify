import { NextApiRequest, NextApiResponse } from 'next';
import { getFakeData } from '../../core/faker';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(getFakeData(123));
};
