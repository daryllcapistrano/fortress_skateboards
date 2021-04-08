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
    marginTop: theme.spacing(8),
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(3),
  },
  media: {
    height: 'auto',
    width: '100%',
    // paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2em',
  },
  button: {
    color: 'white',
    backgroundColor: 'black',
    marginBottom: theme.spacing(2),
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
