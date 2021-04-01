import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    marginBottom: theme.spacing(2),
    '&:hover': {
      '& $media': {
        opacity: 0.6,
        transition: '0.5s ease-in-out',
      },
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  link: {
    textDecoration: 'none',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '0',
    right: '0',
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
    marginLeft: theme.spacing(0.5),
  },
}));
