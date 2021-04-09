import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    margin: 'auto',
    width: '600px',
  },
  navigation: {
    marginBottom: theme.spacing(4),
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(0),
  },
  media: {
    height: 'auto',
    width: '100%',
    // paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
    padding: '1.25em',
  },
  button: {
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 40,
    fontWeight: 700,
    letterSpacing: theme.spacing(0.5),
  },
  productPrice: {
    fontSize: 40,
    fontWeight: 500,
  },
}));
