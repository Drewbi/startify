import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 3),
    fontSize: `12px`,
    color: `#707070`,
  },
  activeLink: {
    margin: theme.spacing(1, 3),
    marginRight: `200px`,
    fontSize: `12px`,
    backgroundColor: `#154A71`,
    color: `#fff`,
    fontWeight: 900,
  },
}));

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <Logo name={props.name} color="#154A71" />
          <Typography
            variant="h6"
            color="primary"
            noWrap
            className={classes.toolbarTitle}
          >
            {props.name}
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Our Products
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              About us
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="contained"
            className={classes.activeLink}
          >
            Regenerate
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
