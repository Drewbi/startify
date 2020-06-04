import React, { useContext } from 'react';
import { FakeContext } from './FakeContext';

const Test: React.FC = () => {
  const { fakeData } = useContext(FakeContext) as {
    fakeData: { name: string };
  };
  return (
    <React.Fragment>
      <p>{fakeData?.name}</p>
    </React.Fragment>
  );
};

export default Test;
