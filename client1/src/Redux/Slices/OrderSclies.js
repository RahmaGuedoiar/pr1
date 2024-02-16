import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const createOrder = createAsyncThunk('/API/createOrder', async (data, { rejectWithValue,dispatch}) => {
    try {
       
        const res = await axios.post('/API/createOrder', data, {
          
        })
       
        dispatch(getOrders())
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
        
    }
})
export const getOrders = createAsyncThunk('/API/getOrders', async (data, { rejectWithValue }) => {
    try {
        
        const res = await axios.get('/API/getOrders')
        
        return res.data
    } catch (error) {
         return rejectWithValue(error.response.data.msg)
    }
})
export const deleteOrder = createAsyncThunk('/API/deleteOrder', async (info, { rejectWithValue,dispatch }) => {
    try {
        
        const res = await axios.delete(`/Api/deleteOrder/${info}`, {
           
        })
        dispatch(getOrders())
       
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})
export const updateOrder=createAsyncThunk('/API/updateOrder',async(data,{rejectWithValue,dispatch})=>{
    
    try {
       const res=await axios.put(`/API/updateOrder/${data.id}`,data.data)
       dispatch(getOrders())
       return res.data
    } catch (error) {
        rejectWithValue(error.response.data.msg)
    }
})
const OrderSlices = createSlice({
    name: 'ProductSlice',
    initialState: {
        OrderData:[],
        isloding: false,
        error: null,

    },

    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action) => {

            state.isloding = false
            state.OrderData=action.payload         

        })
        .addCase(createOrder.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase(createOrder.pending, (state, action) => {

            state.isloding = true

        }).addCase( getOrders.fulfilled, (state, action) => {

            state.isloding = false
            state.OrderData=action.payload

        })
        .addCase(getOrders.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase( getOrders.pending, (state, action) => {

            state.isloding = true

        }).addCase(deleteOrder.fulfilled, (state, action) => {

            state.isloding = false
            state.OrderData=action.payload

        })
        .addCase(deleteOrder.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase( deleteOrder.pending, (state, action) => {

            state.isloding = true

        })
        .addCase(updateOrder.fulfilled, (state, action) => {

            state.isloding = false
            state.OrderData=action.payload.Products

        })
        .addCase(updateOrder.rejected, (state, action) => {

            state.isloding = false
            state.error = action.payload

        })
        .addCase(updateOrder.pending, (state, action) => {

            state.isloding = true

        })

    }

})

export default OrderSlices.reducer