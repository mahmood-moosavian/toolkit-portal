import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export const ProductList = () => {
  const {
    value: products,
    selectedItemId,
    loading,
    error,
  } = useSelector((state) => state.Products);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {loading && !products && <div>Loading...</div>}
          {products && products
            .filter((product) => product.id === parseInt(selectedItemId))
            .map((product) => (
              <Product product={product} key={product.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
