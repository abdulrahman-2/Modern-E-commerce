import { useContext } from "react";
import StripePayment from "../common/StripePayment";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const authContext = useContext(AuthContext);
  const {isAuthenticated } = authContext;

  if (!isAuthenticated) {
    return <Navigate to="/signIn" />;
  } else {
    return (
      <div>
        <StripePayment />
      </div>
    );
  }
};

export default Checkout;
