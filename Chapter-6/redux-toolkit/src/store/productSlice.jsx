import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})

const prodSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state) => {
                // eslint-disable-next-line
                state.status = STATUSES. ERROR;
            })
    }
})

export const { setProducts, setStatus } = prodSlice.actions;
export default prodSlice.reducer;

//Thunks

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data;
    }
    catch (error) {
        throw error
    }
})


// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch) {
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const response = await fetch('https://fakestoreapi.com/products')
//             const data = await response.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE));
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));
//         }
//     }
// }