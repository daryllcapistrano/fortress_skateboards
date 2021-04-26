import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  CircularProgress,
  Button,
  InputLabel,
  Divider,
} from '@material-ui/core';
import { KeyboardBackspace } from '@material-ui/icons';

import useStyles from './styles';

const ProductDetails = ({ products, onAddToCart }) => {
  const [sizeSelect, setSizeSelect] = useState('');
  // const [thisProduct, setThisProduct] = useState({});
  // const [thisOption, setThisOption] = useState([]);
  // const [thisVariant, setThisVariant] = useState('');
  const classes = useStyles();
  const history = useHistory();
  const methods = useForm();

  let { permalink } = useParams();
  // console.log({ permalink });

  const goBack = () => {
    history.goBack();
  };

  // useEffect(() => {
  //   const product = products.find((prod) => prod.permalink === permalink);
  //   const options = product.variant_groups[0].options;
  //   const variantGroupId = product.variant_groups[0].id;

  //   setThisProduct(product);
  //   setThisOption(options);
  //   setThisVariant(variantGroupId);
  // }, [products, permalink]);

  // console.log(thisProduct);
  // console.log(thisOption);

  // find product from permalink, currently loses data on refresh
  const product = products.find((prod) => prod.permalink === permalink);
  console.log(products);
  const options = product.variant_groups[0].options;
  const variantGroupId = product.variant_groups[0].id;

  const handleAddToCart = () => onAddToCart(product.id, 1, { [variantGroupId]: sizeSelect });

  const handleChange = (e) => {
    setSizeSelect(e.target.value);
  };

  if (!products.length)
    return (
      <div style={{ height: `100vh`, position: `relative` }}>
        <div style={{ position: ` absolute`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)` }}>
          <CircularProgress color="secondary" />
        </div>
      </div>
    );

  return (
    <>
      <div className={classes.content}>
        <div className={classes.navigation}>
          <Button onClick={goBack} startIcon={<KeyboardBackspace />}>
            back
          </Button>
        </div>
        <Card className={classes.root} elevation={0}>
          <Grid container spacing={1}>
            {product.assets.map((asset) => (
              <Grid item xs={12} key={asset.id}>
                <img className={classes.media} src={asset.url} alt={asset.filename} />
              </Grid>
            ))}
          </Grid>
          <CardContent className={classes.cardContent}>
            <div>
              <Typography gutterBottom className={classes.productName} variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom className={classes.productPrice} variant="h5" component="h2" color="textSecondary">
                ${product.price.raw}
              </Typography>
            </div>
            <div style={{ paddingLeft: `1em` }}>
              <Typography
                dangerouslySetInnerHTML={{ __html: product.description }}
                variant="body2"
                color="textSecondary"
                component="p"
              />
            </div>
          </CardContent>
          <Divider />
          <FormProvider {...methods}>
            <form style={{ padding: `1.25em`, marginBottom: '1em' }}>
              <InputLabel id="size-select-label" shrink={true}>
                *Choose A Size (required)
              </InputLabel>
              <Select fullWidth value={sizeSelect} onChange={handleChange} variant="outlined">
                {options.map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </form>
          </FormProvider>
          <Divider />
          <CardActions disableSpacing className={classes.cardActions}>
            <Button
              aria-label="Add to Cart"
              onClick={handleAddToCart}
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
            >
              add to cart
            </Button>
            <Button
              component={Link}
              to="/cart"
              aria-label="Go to Cart"
              variant="contained"
              color="default"
              fullWidth
              className={classes.button}
            >
              go to cart
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ProductDetails;
