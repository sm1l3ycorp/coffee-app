import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import CoffeeIcon from '@material-ui/icons/LocalCafe';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { Link } from "react-router-dom";

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
          {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> */}
          <CoffeeIcon />
          {/* </Link> */}
          {/* <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}> */}
            <Typography className={classes.title} variant="h6" noWrap>
              Coffee App
            </Typography>  
          {/* </Link> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {/* <Link to="/cart" onClick={() => setOpenCart(true)} style={{ textDecoration: 'none', color: 'inherit' }}> */}
              <IconButton aria-label="show cart items" color="inherit" onClick={() => setOpenCart(true)}>
                <Badge badgeContent={cartItems.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            {/* </Link> */}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  export default Header;