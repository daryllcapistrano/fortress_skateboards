import React from 'react';
import { Link, IconButton, Container, Typography } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useStyles from './styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="mailto:Corey@fortressskateboards.com">
        Fortress Skateboards
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <div className={classes.social}>
            <Link href="https://www.instagram.com/fortress_collage/" target="_blank" rel="noopener noreferrer">
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Link>
            <Link href="mailto:Corey@fortressskateboards.com">
              <IconButton>
                <MailOutlineIcon />
              </IconButton>
            </Link>
          </div>
          <Typography variant="body1">Fortress Skateboards</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
