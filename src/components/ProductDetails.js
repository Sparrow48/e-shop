import React, { useState, useEffect } from "react";
import sofa from "../assets/FP2.png";

function ProductDetails() {
  const [value, setvalue] = useState(1);

  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   try {
  //     const getProducts = async () => {
  //       const response = await fetch("https://fakestoreapi.com/products/");
  //       const data = await response.json();
  //       setProducts(data);
  //     };

  //     getProducts();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);

  const increment = () => {
    const updateValue = value + 1;
    setvalue(updateValue);
  };
  const decrement = () => {
    const updateValue = value - 1;
    if (updateValue < 1) {
      updateValue = 1;
    }
    setvalue(updateValue);
  };

  const addTocard = () => {};

  return (
    // <div>
    //   {products
    //     .filter((product) => product.id === 1)
    //     .map((product) => (
    //       <img key={product.id} src={product.image} />
    //     ))}
    // </div>

    <div className="max-w-2xl py-16 mx-auto lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <img src={sofa} alt="soofa" />
      </div>
      <div className="flex flex-col space-y-5">
        <h1 className="text-3xl font-bold">Sofa</h1>
        <h2 className="text-xl text-yellow-600">7500 tk</h2>
        <p>
          Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore
          etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat,
          authentic chillwave trust fund. Viral typewriter fingerstache
          pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch
          pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk
          microdosing gochujang live-edge
        </p>
        <p>Available : In Stock (6)</p>
        <p>Category : Living Room</p>
        <p>Brand : Marcos</p>
        <p>SKU : Recs5BSVU3qQrOj4E</p>
        <div className="flex text-3xl font-bold space-x-7">
          <button onClick={decrement}>-</button>
          <h2>{value}</h2>
          <button onClick={increment}>+</button>
        </div>
        <a
          href="/"
          className="px-3 py-2 bg-yellow-600 rounded w-fit"
          onClick={addTocard}
        >
          ADD TO CART
        </a>
      </div>
    </div>
  );
}

export default ProductDetails;
