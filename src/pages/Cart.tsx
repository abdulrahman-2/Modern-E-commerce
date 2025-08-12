import PageHeading from "../common/PageHeading";
import CartRow from "../common/CartRow";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/Cartstore";
import toast from "react-hot-toast";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCartStore();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleClearCart = () => {
    clearCart();
    toast.success("Cart cleared");
  };

  return (
    <div>
      <PageHeading homePage="Home" page="Cart" />
      {cart.length > 0 ? (
        <div className="container my-10">
          <div className="rounded-lg shadow-lg overflow-hidden">
            {/* Scroll wrapper for small screens */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-blue-950 text-white font-semibold">
                  <tr>
                    <th className="px-2 md:px-4 py-2">Image</th>
                    <th className="px-2 md:px-4 py-2">Name</th>
                    <th className="px-2 md:px-4 py-2">Price</th>
                    <th className="px-2 md:px-4 py-2">Quantity</th>
                    <th className="px-2 md:px-4 py-2">SubTotal</th>
                    <th className="px-2 md:px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <CartRow product={product} key={product.id} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Clear Cart Button */}
          <div className="mt-5 w-full flex justify-end">
            <button
              onClick={handleClearCart}
              className="px-4 py-2 bg-rose-800 hover:bg-rose-600 rounded-lg cursor-pointer text-white"
            >
              Clear Cart
            </button>
          </div>

          {/* Cart Total */}
          <div className="mt-5">
            <div className="p-6 w-full md:w-fit rounded-2xl shadow-2xl bg-white font-bold">
              <h1 className="mb-4 text-center text-xl md:text-3xl">
                Cart Total
              </h1>
              <h2 className="flex justify-between mt-5">
                Sub Total : <span>${totalPrice()}</span>
              </h2>
              <div className="flex justify-between mt-5">
                Shipping Charge : <span>free</span>
              </div>
              <div className="flex justify-between mt-5">
                Grand Total : <span>${totalPrice()}</span>
              </div>

              {/* Buttons stack on mobile */}
              <div className="whitespace-nowrap flex flex-col lg:flex-row items-center gap-5 justify-between mt-5">
                <button
                  onClick={handleCheckout}
                  className="px-4 py-2 bg-secondary hover:bg-orange-300 rounded-lg text-white w-full lg:w-auto"
                >
                  Proceed To Checkout
                </button>
                <Link
                  to="/shop"
                  className="px-4 py-2 bg-rose-800 hover:bg-rose-600 rounded-lg text-white w-full lg:w-auto text-center"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container my-40">
          <h1 className="text-center text-2xl">Cart is empty</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
