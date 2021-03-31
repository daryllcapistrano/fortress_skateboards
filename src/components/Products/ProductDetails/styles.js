import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    marginBottom: '4em',
    top: theme.spacing(6),
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    height: '100vh',
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
