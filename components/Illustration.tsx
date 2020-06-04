import React from 'react';

interface IllustrationProps {
  colour: string;
  name: string;
}

const Illustration: React.FC<IllustrationProps> = function ({
  colour,
  name,
}: IllustrationProps) {
  return (
    <object type="image/svg+xml" data={'/' + name}>
      <param name="color" value="blue" />
    </object>
  );
};

export default Illustration;
