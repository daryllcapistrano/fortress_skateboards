import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cartItem: {
    width: '100%',
    maxWidth: `600px`,
    borderRadius: '0',
  },

  cardContent: {
    display: 'flex',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    // alignItems: 'center',
  },
}));
