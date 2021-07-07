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
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const App = () => {
  const [cartItems, setCartItems] = useState([{id: 1, name: 'Americano', size: 's', price: '2.50', amount: 1}, {id: 2, name: 'Cappucino', size: 'm', price: '3.25', amount: 2}]);
  const [tempItem, setTempItem] = useState({});

  const classes = useStyles();
  const [open, setOpenSuccess] = useState(false);

  const handleClick = () => {
    setOpenSuccess(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
  };

  useEffect(() => {
  }, [cartItems]);

  return (
    <Router>
    <div className="App">
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Cart Updated!
        </Alert>
      </Snackbar>
      <Header cartItems={cartItems} />
      <Switch>
          <Route exact path="/">
          <Menu cartItems={cartItems} setCartItems={setCartItems} tempItem={tempItem} setTempItem={setTempItem} setOpenSuccess={setOpenSuccess} />
          </Route>
          <Route path="/cart">
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
