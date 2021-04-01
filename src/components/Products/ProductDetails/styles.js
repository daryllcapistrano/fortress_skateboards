import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    position: 'relative',
    borderRadius: 0,
    marginBottom: '4em',
  },
  navigation: {
    marginTop: theme.spacing(4),
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  media: {
    height: 'auto',
    width: '100%',
    // paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
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
