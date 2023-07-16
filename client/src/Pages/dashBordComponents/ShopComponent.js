import React from "react";
import photo from "../../Images/photoCollections/comperssed/ayaneshu-bhardwaj-Acx3N9h-QXs-unsplash-min.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DshboradProps from "./DshboradProps";
function ShopCoponent() {
  return (
    <DshboradProps
    imageUrl={photo}
      title="Buy or Sell"
      subtitle="You Can Sell Or Buy stuffs here!"
      url="/buyOrSell"
    buttonLabel="Click to Sell or buy"
    buttonIcon={ShoppingCartIcon}
  />
  );
}

export default ShopCoponent;
