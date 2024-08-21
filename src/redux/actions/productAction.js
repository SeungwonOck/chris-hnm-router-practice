import { productActions } from '../reducers/productSlice';

/* function getProducts(serarchQuery) {
    return async(dispatch, getState) => {
        let url = `http://localhost:5000/products?q=${serarchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } })
        dispatch(productActions.getAllProducts({data}))
    }
} */

function getProductDetail(id) {
    return async (dispatch) => {
        let url = `https://my-json-server.typicode.com/SeungwonOck/chris-hnm-router-practice/products/${id}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } })
    }
}

export const productAction = { getProductDetail };