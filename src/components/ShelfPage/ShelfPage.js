import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddItem from "../AddItem/AddItem.jsx";

function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);

  useEffect(() => {
    dispatch({ type: "FETCH_ITEMS" });
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
<<<<<<< HEAD

      <AddItem />
=======
      <ul>
        {items.map(item => {
          return <li key={item.id}>{item.description}
          <img height="200" src={item.image_url}></img></li>
        })}
      </ul>
>>>>>>> 0811f49b3d96f7cf6fe27dd1bcdb4770901e25d6
    </div>
  );
}

export default ShelfPage;
