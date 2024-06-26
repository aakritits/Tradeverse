import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";
import { useCart } from "../cartcontext/CartContext";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);
  const { addToCart, cartItems } = useCart();
  const item = cartItems.find((item) => item.id === id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const quantity = item ? item.quantity : null;

  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="flex flex-col md:flex-row bg-white mt-16 rounded-lg">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="object-contain h-96 w-full"
          />
        </div>
        <div className="md:w-1/2 p-4">
          <div className="text-3xl font-bold">{product.name}</div>
          <div className="text-lg mt-2">{product.description}</div>
          <div className="text-xl font-bold mt-2">${product.price}</div>
          <button
            className="mt-4 bg-black text-white rounded-full px-5 py-2 text-md"
            onClick={() => addToCart(product)}
          >
            Add to Cart {quantity}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
