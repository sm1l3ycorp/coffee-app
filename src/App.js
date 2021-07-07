import './App.css';
import { React, useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Cart from './Components/Cart/Cart';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [tempItem, setTempItem] = useState({});
  const [open, setOpenSuccess] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
  };

  useEffect(() => {
  }, [cartItems]);

  return (
    // <Router>
    <div className="App">
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Cart Updated!
        </Alert>
      </Snackbar>
      <Header cartItems={cartItems} setOpenCart={setOpenCart} />
      {/* <Switch> */}
          {/* <Route exact path="/"> */}
          <Menu cartItems={cartItems} setCartItems={setCartItems} tempItem={tempItem} setTempItem={setTempItem} setOpenSuccess={setOpenSuccess} />
          {/* </Route> */}
          {/* <Route path="/cart"> */}
          <Cart cartItems={cartItems} setCartItems={setCartItems} setOpenSuccess={setOpenSuccess} openCart={openCart} setOpenCart={setOpenCart} />
          {/* </Route>
        </Switch> */}
    </div>
    /* </Router> */
  );
}

export default App;
