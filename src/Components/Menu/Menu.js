import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import data from "../../data.json";
import Tooltip from "@material-ui/core/Tooltip";
import Order from "../Order/Order";

const menuItems = data.menu;

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  description: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const MenuItems = styled.div`
  color: #3f51b5;
  &:hover {
    transform: scale(1.1);
  }
  padding-right: 3rem;
  padding-bottom: 3rem;
`;

const Menu = ({
  cartItems,
  setCartItems,
  tempItem,
  setTempItem,
  setOpenSuccess,
}) => {
  const [open, setOpen] = React.useState(false);

  const updateOrder = (item) => {
    setTempItem(item);
    setOpen(true);
  };

  const classes = useStyles();

  const HtmlTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
    },
  }))(Tooltip);

  return (
    <MenuWrapper>
      <Order
        open={open}
        setOpen={setOpen}
        tempItem={tempItem}
        setOpenSuccess={setOpenSuccess}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      {menuItems.map((item, index) => (
        <MenuItems key={index} onClick={() => updateOrder(item)}>
          <HtmlTooltip
            title={
              <>
                <Typography color="inherit">Click to Order</Typography>
                <small>
                  Small: ${item.prices.Small} Medium: ${item.prices.Medium}{" "}
                  Large: ${item.prices.Large}
                </small>
              </>
            }
          >
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  {item.name}
                </Typography>
                <img src={item.image} alt="" />
                <Typography
                  className={classes.description}
                  color="textSecondary"
                >
                  {item.description}
                  <br />
                  <i>From ${item.prices.Small}</i>
                </Typography>
              </CardContent>
            </Card>
          </HtmlTooltip>
        </MenuItems>
      ))}
    </MenuWrapper>
  );
};

Menu.propTypes = {
  cartItems: PropTypes.array.isRequired,
  setCartItems: PropTypes.func.isRequired,
};

export default Menu;
