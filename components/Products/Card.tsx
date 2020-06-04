import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export interface CardProps {
  imageSrc?: string;
  title?: string;
  bodyText?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  bodyText,
}: CardProps) => {
  return (
    <Grid item>
      <img height="200" src={imageSrc} />
      <Typography style={{ width: '300px' }} variant="h3">
        {title}
      </Typography>
      <Typography style={{ width: '300px' }} variant="body1">
        {bodyText}
      </Typography>
    </Grid>
  );
};

export default Card;
