import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { Link } from "react-router-dom";
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

const Cart = ({ cartItems, setCartItems }) => {
      
const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

const amount = cartItems ? cartItems.map(item => item.price) : 0;
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

  const CartWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;    
  `;

    return (
        <CartWrapper>
           <List className={classes.root}>
           {cartItems && cartItems.length > 0 ? 
           cartItems.map(item => 
            <div key={item.id}>
                     <ListItem>
                        <ListItemAvatar>
                            <Tooltip title="Delete" arrow>
                            <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                            </Tooltip>
                        </ListItemAvatar>
                        <ListItemText primary={`x${item.amount} ${item.size.toUpperCase()} ${item.name}`} secondary={`${currency.format(parseFloat(item.price * item.amount))}`}/>
                    </ListItem>
                    <Divider variant="inset" component="li" />
            </div>       
            )                     
            : 'Your cart is empty!'}
            {cartItems.length > 0 &&
            <>
                <i>Subtotal: {currency.format(subtotal)}<br />
                Tax: {currency.format(taxes)}<br /></i>
                <b>Total: {currency.format(total)}</b><br />
                <Button variant="contained" color="primary">Checkout</Button>
            </>
            }
            </List>
        </CartWrapper>
    )
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    setCartItems: PropTypes.func.isRequired,
}

export default Cart