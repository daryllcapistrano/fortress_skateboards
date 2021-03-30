import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    marginBottom: '4em',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 40,
    fontWeight: 700,
  },
  productPrice: {
    fontSize: 40,
    fontWeight: 500,
  },
}));
