import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddItem from "../AddItem/AddItem.jsx";

function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, [dispatch]);

  const deleteItem = (id) => {
    dispatch({type: 'DELETE_ITEM', payload: id});
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>

      {user.id && <AddItem />}
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.description}
              <img height="200" src={item.image_url}></img>
              {user.id && <button onClick={() => deleteItem(item.id)}>DELETE</button>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ShelfPage;
