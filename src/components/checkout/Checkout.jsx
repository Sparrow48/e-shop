import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckOutDetails from "./CheckOutDetails";
import { createOrder } from "../../store/reducer/orderSlice";
import PhoneFormItem from "../Form/PhoneFormItem";
import { debounce } from "../../utils/Debounce";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";

const Checkout = (props) => {
  const { totalPrice, totalQuantity, items } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [products, setProducts] = useState([])
  const [isUsernameValid, setUsernameValidation] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let _products = []
    items.map((item) => {
      const { _id, price, quantity } = item
      _products.push({ product: _id, price, quantity })
    })

    setProducts(_products)
  }, [])

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const addressHandler = (event) => {
    setAddress(event.target.value);
  };

  const checkoutHandler = async (e) => {
    try {
      e.preventDefault();

      let payload = {
        name,
        address,
        phone: username,
        products,
        deliveryFee: 1200,
        paymentMethod: 'COD',
        user: user._id
      }

      const response = await dispatch(createOrder(payload))

      if (response.payload) {
        toastr.success('Order successful.')
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        localStorage.removeItem("totalPrice");
        navigate('/track-order')
      }

    } catch (error) {
      console.error('CREATE_ORDER_ERROR :', error);
    }

  }

  const optimize_NameHandler = debounce(nameHandler, 500);
  const optimize_addressHandler = debounce(addressHandler, 500);


  return (
    <div className="max-w-2xl py-16 mx-5 lg:mx-auto md:max-w-4xl lg:max-w-6xl ">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-20rem)] gap-10 lg:space-y-0 lg:flex-row">
        <div className="order-last lg:order-first">
          <div className="w-full ">
            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" onSubmit={checkoutHandler}>
              <div className="flex w-full space-x-3">
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                    id="username"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline border-gray-300"
                    name="name"
                    id="username"
                    type="text"
                    onChange={optimize_NameHandler}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="username"
                  >
                    Phone Number
                  </label>
                  <PhoneFormItem setUsername={setUsername} setUsernameValidation={setUsernameValidation} className='checkout' />
                  {(!isUsernameValid && username.length) ? <p className=" text-red-600 pt-1">Invalid username</p> : ''}
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="username"
                >
                  Full Address
                </label>
                <textarea
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline border-gray-300"
                  id="username"
                  type="text"
                  onChange={optimize_addressHandler}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  disabled={!isUsernameValid}
                  className=" disabled:bg-gray-500 disabled:opacity-25 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"

                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
          <CheckOutDetails
            totalQuantity={totalQuantity}
            totalPrice={totalPrice}
            flag="false"
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
