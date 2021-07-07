import "./App.css";
import { React, useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/Menu";
import Cart from "./Components/Cart/Cart";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [tempItem, setTempItem] = useState({});
  const [open, setOpenSuccess] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
  };

  const handleCloseOrder = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOrderSuccess(false);
  };

  useEffect(() => {}, [cartItems]);

  return (
    <div className="App">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Cart Updated!
        </Alert>
      </Snackbar>
      <Snackbar
        open={orderSuccess}
        autoHideDuration={6000}
        onClose={handleCloseOrder}
      >
        <Alert onClose={handleCloseOrder} severity="info">
          Order Placed!
        </Alert>
      </Snackbar>
      <Header cartItems={cartItems} setOpenCart={setOpenCart} />
      <Menu
        cartItems={cartItems}
        setCartItems={setCartItems}
        tempItem={tempItem}
        setTempItem={setTempItem}
        setOpenSuccess={setOpenSuccess}
      />
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        setOpenSuccess={setOpenSuccess}
        openCart={openCart}
        setOpenCart={setOpenCart}
        setOrderSuccess={setOrderSuccess}
      />
    </div>
  );
};

export default App;
