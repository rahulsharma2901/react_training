import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

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
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES. ERROR;
            })
    }
})

export const { setProducts, setStatus } = prodSlice.actions;
export default prodSlice.reducer;

//Thunks

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    return data;
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