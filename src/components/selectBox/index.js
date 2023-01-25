import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../features/products/action";
import { selectItem } from "../../features/products/productsSlice";

export const SelectBox = () => {
  const dispatch = useDispatch();
  const { error, loading, value } = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const onChangeHandler = (e) => {
    dispatch(selectItem(e.target.value));
  }
  return (
    <div>
      {error && <div>error acuured!!</div>}
      {loading && !value && <div>loading...</div>}
      {!loading && value && (
        <select onChange={onChangeHandler}>
          <option value="">Please selet one title</option>
          {value.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};
