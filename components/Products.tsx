import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const Products: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <object
        type="image/svg+xml"
        data="assets/illustrations/undraw_code_inspection_bdl7.svg"
      >
        <param name="color" value="ff0044" />
      </object>
    </React.Fragment>
  );
};

export default Products;
