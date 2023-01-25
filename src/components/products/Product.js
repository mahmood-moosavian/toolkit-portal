import React from "react";

const Product = ({ product }) => {
  return (
    <tr key={product.id}>
      <td>{product.userId}</td>
      <td>{product.title}</td>
      <td>{product.body}</td>
    </tr>
  );
};

export default Product;
