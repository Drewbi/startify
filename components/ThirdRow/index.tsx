import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface ThirdRowProps {
  title?: string;
  bodyText?: string;
  imageSrc?: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: `100px 200px`,
    display: `flex`,
    justifyContent: `space-between`,
    flexWrap: `nowrap`,
  },
  image: {
    height: `20vw`,
    width: `40vw`,
    marginLeft: `70px`,
  },
  button: {
    margin: `20px 0`,
  },
}));

const FirstRow: React.FC<ThirdRowProps> = ({
  title,
  bodyText,
  imageSrc,
}: ThirdRowProps) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box flexDirection="row" maxWidth="50%">
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{bodyText}</Typography>
        <Button className={classes.button} variant="contained" color="primary">
          Our Solutions
        </Button>
      </Box>
      <img className={classes.image} src={imageSrc} />
    </div>
  );
};

export default FirstRow;
