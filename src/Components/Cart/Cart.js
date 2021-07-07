import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CartWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;    
`;

const Cart = ({ cartItems, setCartItems, setOpenSuccess, openCart, setOpenCart,setOrderSuccess }) => {
const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

const removeItem = (item) => {
  const newItems = cartItems.filter(x => x.id !== item.id && x.size !== item.size);
  setCartItems(newItems);
  setOpenSuccess(true);
}

const amount = cartItems ? cartItems.map(item => item.price * item.amount) : 0;
const subtotal = (amount.length > 0) ? amount.reduce((x, y) => parseFloat(x) + parseFloat(y)) : 0;
const taxes = subtotal * .09;
const total = subtotal + taxes;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      
    },
  }));

  const classes = useStyles();

  const handleClose = () => {
    setOpenCart(false);
  };

    return (
        <CartWrapper>
          <Dialog
        fullWidth={true}
        maxWidth={'sm'}
        open={openCart}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Cart Summary</DialogTitle>
        <DialogContent>
            <center>
          <DialogContentText>
          <List className={classes.root}>
           {cartItems && cartItems.length > 0 ? 
           cartItems.map((item, index) => 
            <div key={index}>
                     <ListItem>
                        <ListItemAvatar>
                            <Tooltip title="Delete" arrow>
                            <IconButton aria-label="delete">
                                <DeleteIcon onClick={() => removeItem(item)} />
                            </IconButton>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={`x${item.amount} ${item.size} ${item.name}`} secondary={`${currency.format(parseFloat(item.price * item.amount))}`}/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
            </div>       
            )                     
            : 'Your cart is empty!'}
            {cartItems.length > 0 &&
            <>
                <i>Subtotal: {currency.format(subtotal)}<br />
                Tax: {currency.format(taxes)}<br /></i>
                <b>Total: {currency.format(total)}</b><br /><br />
                <Button variant="contained" color="primary" onClick={() => { setOpenCart(false); setCartItems([]); setOrderSuccess(true);}} >Checkout</Button>
            </>
            }
            </List>
          </DialogContentText>
          </center>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
        </CartWrapper>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
}

export default Cart