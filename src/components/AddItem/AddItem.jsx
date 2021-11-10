import { useState } from "react";
import { useDispatch } from "react-redux";

function AddItem(props) {
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const addItem = (e) => {
    e.preventDefault();

    // send input data to saga
    dispatch({
      type: "ADD_ITEM",
      payload: { description, url },
    });

    // Clear inputs immediately for now
    setDescription("");
    setUrl("");
  };

  console.log({ description, url });

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          type="text"
          placeholder="Image Url"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
