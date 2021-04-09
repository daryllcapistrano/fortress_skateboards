import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: '0',
    marginTop: theme.spacing(2),
  },
  media: {
    height: '333px',
    // paddingTop: '56.25%', // 16:9
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
    justifyContent: 'space-between',
    padding: theme.spacing(1),
  },
  productName: {
    fontWeight: 700,
    marginBottom: '0',
    marginLeft: theme.spacing(1),
    letterSpacing: theme.spacing(0.5),
  },
  productPrice: {
    fontWeight: 700,
    marginBottom: theme.spacing(4),
  },
}));
