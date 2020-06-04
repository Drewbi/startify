import React, { createContext, useState } from 'react';

export const FakeContext = createContext({});

interface FakeProviderProps {
  children: React.ReactNode;
}

export const FakeProvider: React.FC<FakeProviderProps> = ({
  children,
}: FakeProviderProps) => {
  const [fakeData, setFakeData] = useState({ name: 'Human' });

  const handleFakeData = (newFakeData) => {
    setFakeData(newFakeData);
  };

  const contextProps = {
    fakeData,
    handleFakeData,
  };

  return (
    <FakeContext.Provider value={contextProps}>{children}</FakeContext.Provider>
  );
};
