import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(){
    // GET ALL ITEMS
    try {
        const response = yield axios.get('api/shelf')
        yield put({type: 'SET_ITEMS', payload: response.data});
    } catch (err) {
        yield put({type: 'FETCH_ITEMS_ERROR'})
        console.log('Error in fetchItems', err);
    }
}



function* itemsSaga() {
    // watching for actions
    yield takeLatest('FETCH_ITEMS', fetchItems)
}

export default itemsSaga;