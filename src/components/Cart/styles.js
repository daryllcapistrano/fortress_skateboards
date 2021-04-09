import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),
  },
  wrapper: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    margin: 'auto',
    width: '600px',
  },
  title: {
    fontSize: '2.25em',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
  },
  subtotal: {
    alignSelf: 'flex-end',
  },
  navigation: {
    marginBottom: theme.spacing(4),
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
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '1.25em',
    marginTop: theme.spacing(6),
  },
}));
