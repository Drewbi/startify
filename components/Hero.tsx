import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroImage: {
    objectFit: `cover`,
    width: `100%`,
    height: `calc(50px + 30vh)`,
  },
}));

const HeroImage: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        src="https://unsplash.com/photos/MYbhN8KaaEc/download"
        className={classes.heroImage}
      ></img>
    </div>
  );
};

export default HeroImage;
