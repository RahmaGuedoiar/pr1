import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const userLogin = createAsyncThunk('/API/login', async (data, { rejectWithValue }) => {
    try {

        const res = await axios.post('/API/login', data)

        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})

export const UserRegister = createAsyncThunk('/API/register', async (data, { rejectWithValue }) => {
    try {

        const res = await axios.post('/API/register', data)

        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data.msg)
    }
})
// export const getAlluser = createAsyncThunk('/API/getUsers', async (data, { rejectWithValue, getState }) => {
//     const state = getState();
//     // Assuming you have a 'user' object in your state that contains role information
//     const userRole = state.user.role;

//     // Check if the user has the 'admin' role
//     if (userRole !== 'admin') {
//         // If not, handle the unauthorized access
//         return rejectWithValue({ message: 'Unauthorized access' });
//     }

//     try {
//         const res = await axios.get('/API/adminData');
//         return res.data;
//     } catch (error) {
//         return rejectWithValue(error.response.data.msg);
//     }
// })
const UserSlices = createSlice({
    name: 'UserSlice',
    initialState: {
        userData: {},
        
        token: localStorage.getItem('token') || null,
        isloding: false,
        error: null,
        isAuth: localStorage.getItem('isAuth') || false
    },
    reducers: {
        logout: (state) => {
            state.token = null
            state.isAuth = false
            localStorage.removeItem('token')
            localStorage.removeItem('isAuth')
        }
    },
    extraReducers: (builder) => {

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.isloding = false
            state.isAuth = true
         
            localStorage.setItem('token', state.token)
            localStorage.setItem('isAuth', state.isAuth)
        })
            .addCase(userLogin.rejected, (state, action) => {
                state.token = null
                state.isloding = false
                state.isAuth = false
                state.error = action.payload

            })
            .addCase(userLogin.pending, (state, action) => {

                state.isloding = true


            }).addCase(UserRegister.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.isloding = false
                state.isAuth = true

                localStorage.setItem('token', state.token)
                localStorage.setItem('isAuth', state.isAuth)
            })
            .addCase(UserRegister.rejected, (state, action) => {
                state.token = null
                state.isloding = false
                state.isAuth = false
                state.error = action.payload

            })
            .addCase(UserRegister.pending, (state, action) => {

                state.isloding = true


            })


    }

})

export default UserSlices.reducer
export const { logout } = UserSlices.actions
