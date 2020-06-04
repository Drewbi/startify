import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface FirstRowProps {
  titleText?: string;
  firstText?: string;
  secondText?: string;
  imageSrc?: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: `50px 200px 100px 200px`,
  },
  image: {
    margin: `0 0 0 auto`,
    display: theme.breakpoints.up('lg') ? `block` : `none`,
  },
}));

const FirstRow: React.FC<FirstRowProps> = ({
  titleText,
  firstText,
  secondText,
  imageSrc,
}: FirstRowProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box display="flex" flexWrap="wrap">
        <Box flexDirection="row" width="40%">
          <Typography variant="h1">{titleText}</Typography>
          <Typography variant="body2">{firstText}</Typography>
          <Typography variant="body1">{secondText}</Typography>
        </Box>
        <img className={classes.image} src={imageSrc} width="40%" />
      </Box>
    </div>
  );
};

export default FirstRow;
