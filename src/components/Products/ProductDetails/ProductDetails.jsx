import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Select,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  Typography,
  CircularProgress,
  Button,
  InputLabel,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import useStyles from './styles';

const ProductDetails = ({ products, onAddToCart }) => {
  const [sizeSelect, setSizeSelect] = useState('');
  // const [arguement, setArguement] = useState({ variant_id: '', option_id: '' });

  const { permalink } = useParams();
  const classes = useStyles();
  const history = useHistory();
  const methods = useForm();

  const goBack = () => {
    history.goBack();
  };

  //* find product from permalink, currently loses data on refresh
  const product = products.find((prod) => prod.permalink === permalink);

  //* retrieve options, currently breaks due to above
  const options = product.variant_groups[0].options;

  // ! experimental: trying to add product size to cart

  const variantGroupId = product.variant_groups[0].id;

  console.log(products);

  const handleAddToCart = () => onAddToCart(product.id, 1, { [variantGroupId]: sizeSelect });

  const handleChange = (e) => {
    setSizeSelect(e.target.value);
  };

  // ! end experimental

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
      {product && (
        <div className={classes.content}>
          <div className={classes.navigation}>
            <Button onClick={goBack} startIcon={<KeyboardBackspaceIcon />}>
              back
            </Button>
          </div>
          <Card className={classes.root} elevation={0}>
            {product.assets.map((asset) => (
              <img key={asset.id} className={classes.media} src={asset.url} alt={asset.filename} />
            ))}
            <CardContent>
              <div className={classes.cardContent}>
                <Typography gutterBottom className={classes.productName} variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography gutterBottom className={classes.productPrice} variant="h5" component="h2">
                  ${product.price.raw}
                </Typography>
              </div>
              <Typography
                dangerouslySetInnerHTML={{ __html: product.description }}
                variant="body2"
                color="textSecondary"
                component="p"
              />
              <div style={{ height: `100px` }}>{sizeSelect}</div>
            </CardContent>
            <FormProvider {...methods}>
              <form>
                <Select fullWidth value={sizeSelect} onChange={handleChange}>
                  <InputLabel value="" disabled>
                    Choose A Size
                  </InputLabel>
                  {options.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </form>
            </FormProvider>
            <CardActions disableSpacing className={classes.cardActions}>
              <Button component={Link} to="/cart" startIcon={<AddShoppingCart />} aria-label="Add to Cart">
                checkout
              </Button>
              <Button startIcon={<AddShoppingCart />} aria-label="Add to Cart" onClick={handleAddToCart}>
                add to cart
              </Button>
            </CardActions>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
