import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface CardProps {
  imageSrc?: string;
  title?: string;
  bodyText?: string;
  className?: string;
}

const useStyles = makeStyles(() => ({
  card: {
    margin: `30px`,
    display: `flex`,
    flexDirection: 'column',
    flexWrap: `nowrap`,
    justifyContent: 'center',
  },
}));

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  bodyText,
}: CardProps) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.card}>
      <img height="150" src={imageSrc} />
      <Typography align="center" style={{ width: '300px' }} variant="h3">
        {title}
      </Typography>
      <Typography align="justify" style={{ width: '300px' }} variant="body1">
        {bodyText}
      </Typography>
    </Grid>
  );
};

export default Card;
