import React, { useContext } from 'react';
import { FakeContext } from './FakeContext';
import Illustration from './Illustration';

const Test: React.FC = () => {
  const { fakeData } = useContext(FakeContext) as {
    fakeData: { name: string };
  };
  return (
    <React.Fragment>
      <p>{fakeData?.name}</p>
      <Illustration name="undraw_code_inspection_bdl7.svg" colour="#ff3388" />
    </React.Fragment>
  );
};

export default Test;
