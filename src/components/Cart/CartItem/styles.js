import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: `600px`,
    borderRadius: '0',
    marginBottom: theme.spacing(2),
  },
  media: {
    height: '6em',
    width: '6em',
    marginLeft: theme.spacing(1),
  },
  cardContent: {
    display: 'flex',
    padding: '0',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cartActions: {
    display: 'flex',
    padding: '0',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  buttons: {
    display: 'flex',
    // alignItems: 'center',
  },
}));
