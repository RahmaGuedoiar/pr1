import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const add_product = createAsyncThunk('/API/addproduct', async (data, { rejectWithValue,dispatch}) => {
    try {
       
        const res = await axios.post('/API/addproduct', data, {
          
        })
       
        dispatch(getAllproduct())
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
        
    }
})
export const getAllproduct = createAsyncThunk('/API/getProducts', async (data, { rejectWithValue }) => {
    try {
        
        const res = await axios.get('/API/getProducts')
        
        return res.data
    } catch (error) {
         return rejectWithValue(error.response.data.msg)
    }
})
export const deleteProduct = createAsyncThunk('/API/deleteProduct', async (info, { rejectWithValue,dispatch }) => {
    try {
        
        const res = await axios.delete(`/Api/deleteProduct/${info}`, {
           
        })
        dispatch(getAllproduct())
       
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})
export const updateProduct=createAsyncThunk('/API/updateProduct',async(data,{rejectWithValue,dispatch})=>{
    
    try {
       const res=await axios.put(`/API/updateProduct/${data.id}`,data.data)
       dispatch((getAllproduct()))
       return res.data
    } catch (error) {
        rejectWithValue(error.response.data.msg)
    }
})
const ProductSlices = createSlice({
    name: 'ProductSlice',
    initialState: {
        ProductData:[],
        isloding: false,
        error: null,

    },

    extraReducers: (builder) => {
        builder.addCase(add_product.fulfilled, (state, action) => {

            state.isloding = false
            state.ProductData=action.payload         

        })
        .addCase(add_product.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase(add_product.pending, (state, action) => {

            state.isloding = true

        }).addCase( getAllproduct.fulfilled, (state, action) => {

            state.isloding = false
            state.ProductData=action.payload.Products

        })
        .addCase(getAllproduct.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase( getAllproduct.pending, (state, action) => {

            state.isloding = true

        }).addCase(deleteProduct.fulfilled, (state, action) => {

            state.isloding = false
            state.ProductData=action.payload.Products

        })
        .addCase(deleteProduct.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase( deleteProduct.pending, (state, action) => {

            state.isloding = true

        })
        .addCase(updateProduct.fulfilled, (state, action) => {

            state.isloding = false
            state.ProductData=action.payload.Products

        })
        .addCase(updateProduct.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase(updateProduct.pending, (state, action) => {

            state.isloding = true

        })

    }

})

export default ProductSlices.reducer