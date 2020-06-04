import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface ThirdRowProps {
  title?: string;
  bodyText?: string;
  imageSrc?: string;
}

const useStyles = makeStyles((theme) => ({
  container: {
    margin: `0 200px`,
    marginTop: '50px',
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
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography style={{ width: '900px' }} variant="h2">
            {title}
          </Typography>
          <Typography style={{ width: '500px' }} variant="body1">
            {bodyText}
          </Typography>
        </Grid>
        <Grid item>
          <img width="50%" src={imageSrc} />
        </Grid>
      </Grid>
    </div>
  );
};

export default FirstRow;
