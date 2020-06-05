import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroImage: {
    objectFit: `cover`,
    width: `100%`,
    height: `200px`,
  },
}));

interface HeroProps {
  image: string;
}

const HeroImage: React.FC<HeroProps> = ({ image }: HeroProps) => {
  const classes = useStyles();
  return (
    <div>
      <img src={image} className={classes.heroImage}></img>
    </div>
  );
};

export default HeroImage;
