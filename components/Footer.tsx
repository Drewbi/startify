import Logo from './Logo';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: { marginLeft: `0px` },
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
  quoteContainer: { display: `flex`, alignItems: `center` },
  linkContainer: {},
}));

interface FooterProps {
  companyName: string;
  quote: string;
  address: {
    streetAddress: string;
    streetName: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  };
  phoneNumber: string;
  person: {
    name: string;
    suffix: string;
    title: string;
  };
}

const Footer: React.FC<FooterProps> = ({
  companyName,
  quote,
  address,
  phoneNumber,
  person,
}: FooterProps) => {
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
          <Logo name={companyName} color="white"></Logo>
          <Typography variant="h6" className={classes.LogoText}>
            {companyName}
          </Typography>
        </div>
        <Typography className={classes.text}>
          {address.streetAddress}, {address.streetName}, {address.city}
        </Typography>
        <Typography className={classes.text}>
          {address.state}, {address.country}, {address.zipCode}
        </Typography>
        <Typography className={classes.text}>{phoneNumber}</Typography>
      </Box>
      <Box className={classes.quoteContainer}>
        <Typography className={classes.quoteText}>&quot;{quote}</Typography>
        <Typography className={classes.text}>
          - {person.name} {person.suffix}, {person.title}
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
