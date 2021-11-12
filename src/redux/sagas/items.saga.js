import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchItems() {
  // GET ALL ITEMS
  try {
    const response = yield axios.get("/api/shelf");

    yield console.log('response', response);

    yield put({ type: "SET_ITEMS", payload: response.data });
  } catch (err) {
    yield put({ type: "FETCH_ITEMS_ERROR" });
    console.log("Error in fetchItems", err);
  }
}

function* addItem(action) {
  //Send Item to db
  try {
    yield axios.post("/api/shelf/", action.payload);
    yield put({ type: "FETCH_ITEMS" });
  } catch (err) {
    console.log(err);
  }
}

function* deleteItem(action) {
  try {
    yield axios.delete(`/api/shelf/${action.payload}`);
    yield put({ type: 'FETCH_ITEMS' })
  } catch (err) {
    console.log(err);
  }
}

function* itemsSaga() {
  // watching for actions
  yield takeLatest("FETCH_ITEMS", fetchItems);
  yield takeLatest("ADD_ITEM", addItem);
  yield takeLatest("DELETE_ITEM", deleteItem);
}

export default itemsSaga;
