import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: `3px 10px 0 0`,
  },
}));

interface LogoProps {
  name: string;
  color: string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const classes = useStyles();
  return (
    <div>
      <svg width="30" height="30" className={classes.logo}>
        <circle
          cx="15"
          cy="16"
          r="12"
          stroke={props.color}
          strokeWidth="2.5"
          fill="none"
        />
        <text
          fill={props.color}
          fontSize="18"
          fontFamily="Beirut"
          textAnchor="middle"
          x="50%"
          y="73%"
        >
          {props.name.substr(0, 1)}
        </text>
      </svg>
    </div>
  );
};

export default Logo;
