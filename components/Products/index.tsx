import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card, { CardProps } from './Card';

interface ProductsProps {
  data: CardProps[];
}

const useStyles = makeStyles(() => ({
  container: {
    margin: `0 200px`,
    marginTop: '50px',
  },
}));

const FirstRow: React.FC<ProductsProps> = ({ data }: ProductsProps) => {
  const classes = useStyles();

  // Rendering cards
  const cards = data.map(({ imageSrc, title, bodyText }, idx) => (
    <Card key={idx} imageSrc={imageSrc} title={title} bodyText={bodyText} />
  ));

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        {cards}
      </Grid>
    </div>
  );
};

export default FirstRow;
