import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const items = useSelector(store => store.items);

  useEffect(() => {
    dispatch({type: 'FETCH_ITEMS'})
  }, [dispatch])

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
