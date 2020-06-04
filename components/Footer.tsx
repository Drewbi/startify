import Logo from './Logo';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: `200px`,
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  link: {
    color: `white`,
    fontWeight: 300,
    fontSize: `15px`,
  },
  text: {
    color: `white`,
    fontWeight: 300,
    fontSize: `15px`,
  },
  quoteText: {
    color: `white`,
    fontWeight: 500,
    fontSize: `17px`,
  },
  LogoText: {
    color: `white`,
  },
  logoContainer: {},
  quoteContainer: {},
  linkContainer: {},
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        mb={5}
        ml={20}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        className={classes.logoContainer}
      >
        <div>
          <Logo name="Graham & Graham" color="white"></Logo>
          <Typography variant="h6" className={classes.LogoText}>
            Graham & Graham
          </Typography>
        </div>
        <Typography className={classes.text}>
          319 Maggio Brooks, East Leahaven
        </Typography>
        <Typography className={classes.text}>Borders, Romania, 0213</Typography>
        <Typography className={classes.text}>(788) 317-9037</Typography>
      </Box>
      <Box className={classes.quoteContainer}>
        <Typography className={classes.quoteText}>
          &quot;Total intermediate synergy”
        </Typography>
        <Typography className={classes.text}>
          - Kattie Welch Sr, Global Paradigm Engineer
        </Typography>
      </Box>
      <Box
        mb={5}
        mr={20}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        textAlign="right"
        className={classes.linkContainer}
      >
        <Link className={classes.link}>Home</Link>
        <Link className={classes.link}>Our Products</Link>
        <Link className={classes.link}>About Us</Link>
      </Box>
    </Box>
  );
};

export default Footer;
