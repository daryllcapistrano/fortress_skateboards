import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
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
    paddingLeft: theme.spacing(2),
  },
  navigation: {
    // marginTop: theme.spacing(4),
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
    padding: '2em',
  },
}));
