import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    marginBottom: theme.spacing(2),
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
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '0',
    paddingBottom: '0',
  },
  productName: {
    fontSize: '48px',
    fontWeight: 700,
    alignSelf: 'flex-start',
    marginBottom: '0',
  },
  productPrice: {
    fontSize: '32px',
    fontWeight: 700,
    alignSelf: 'flex-start',
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
