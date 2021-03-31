import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    marginBottom: '4em',
    '&:hover': {
      '& $media': {
        opacity: 0.3,
        transition: '0.5s ease-in-out',
      },
      '& $overlay': {
        display: 'initial',
        transition: '0.5s ease-in-out',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& $overlay': {
        display: 'initial',
        position: 'initial',
      },
    },
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
    fontSize: 32,
    fontWeight: 700,
  },
  productPrice: {
    fontSize: 32,
    fontWeight: 700,
  },
  overlay: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    width: '100%',
  },
}));
