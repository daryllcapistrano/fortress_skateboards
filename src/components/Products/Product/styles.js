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
  },
  productName: {
    fontSize: '3em',
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
