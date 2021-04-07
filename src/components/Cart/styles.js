import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginTop: '5%',
    fontSize: '2.25em',
  },
  navigation: {
    marginTop: theme.spacing(4),
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
    maxWidth: '600px',
    marginTop: theme.spacing(4),
    backgroundColor: 'black',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10%',
    width: '100%',
  },
}));
