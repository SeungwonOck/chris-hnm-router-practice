import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

let initialState = {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null

}

export const fetchProducts = createAsyncThunk(
    'product/fetchAll',
    async (serarchQuery, thunkApi) => {
        try {
            let url = `http://localhost:5000/products?q=${serarchQuery}`;
            let response = await fetch(url);
            return await response.json();
        } catch (error) {
            thunkApi.rejectWithValue(error);
        }
})

/* function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return { ...state, productList: payload.data };
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return {...state, selectedItem: payload.data}
        default:
            return state;
    }
} */

// export default productReducer;

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getSingleProduct(state, action) {
            state.selectedItem = action.payload.data
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => { 
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;

