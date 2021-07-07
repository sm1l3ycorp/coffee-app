import { React, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "fit-content",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const Order = ({
  open,
  setOpen,
  tempItem,
  setOpenSuccess,
  cartItems,
  setCartItems,
}) => {
  const classes = useStyles();
  const [size, setSize] = useState("Medium");
  const [amount, setAmount] = useState("0");

  const handleClose = () => {
    setOpen(false);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          Customize your {tempItem.name}
        </DialogTitle>
        <DialogContent>
          <center>
            <DialogContentText>
              {tempItem.length && (
                <>
                  Small: ${tempItem.prices.small} Medium: $
                  {tempItem.prices.medium} Large: ${tempItem.prices.large}{" "}
                </>
              )}
            </DialogContentText>
          </center>
          <form className={classes.form} noValidate>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="coffee-size">Size</InputLabel>
              <Select
                autoFocus
                value={size}
                onChange={handleSizeChange}
                inputProps={{
                  name: "coffee-size",
                  id: "coffee-size",
                }}
              >
                <MenuItem value="Small">Small</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Large">Large</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                id="standard-number"
                label="Amount"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  inputProps: {
                    max: 10,
                    min: 1,
                  },
                }}
                onChange={handleAmountChange}
              />
            </FormControl>
            <br />
            <Button
              onClick={() => {
                if (amount > 0 && amount < 11) {
                  let tempData = [];
                  tempItem.size = size;
                  tempItem.amount = amount;
                  tempItem.price = tempItem.prices[size];
                  tempData.push(tempItem);
                  const currentItems = cartItems;
                  const newCart = tempData.concat(currentItems);
                  setCartItems(newCart);
                  setOpenSuccess(true);
                  handleClose();
                }
              }}
              variant="contained"
              color="primary"
            >
              Add
            </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Order;
