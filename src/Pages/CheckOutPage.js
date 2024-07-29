import React from "react";

import AddressForm from "../Components/Checkout/AddressForm";
import handleAddSubmit from '../Components/Checkout/AddressForm'
import handleCardSubmit from '../Components/Checkout/CardPayment'

const CheckOutPage = () => {
  return (
    <>
      <AddressForm />
    </>
  );
}

export default CheckOutPage;
