import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchAsyncGet = createAsyncThunk("fetch/get", async () => {
    const res = await axios.get(apiUrl);
    return res.data;
})

export interface UsersType {
    users: UserState[]
}

export type UserState = {
    id: number
    name: string
    username: string
    email: string
    address: {
        street: string
        suite: string
        city: string
        zipcode: string
        geo: {
            lat: string
            lng: string
        }
    },
    phone: string
    website: string
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
}

const initialState: UsersType = {
    users: []
};

export const fetchSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
            //成功
            return {
                ...state,
                users: action.payload,
            };
        });
    },
});

export const { } = fetchSlice.actions;

export const selectUsers = (state: RootState) => state.fetch.users;

export default fetchSlice.reducer;
