import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import CoffeeIcon from '@material-ui/icons/LocalCafe';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      paddingLeft: '1rem',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
  }));
  
  const Header = ({ cartItems, setOpenCart }) => {
    const classes = useStyles();
  
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
          <CoffeeIcon />
            <Typography className={classes.title} variant="h6" noWrap>
              Coffee App
            </Typography>  
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show cart items" color="inherit" onClick={() => setOpenCart(true)}>
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default Header;