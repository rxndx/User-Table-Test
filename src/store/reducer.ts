import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserState } from '../component/types';
import { Api } from '../api/Api';
import {AppDispatch} from "./store";

const generateSlice = (sliceName: string, apiUrl: string) => {
    const api = new Api(apiUrl);

    const slice = createSlice({
        name: sliceName,
        initialState: { list: [] } as UserState,
        reducers: {
            setItems: (state, action: PayloadAction<User[]>) => {
                state.list = action.payload;
            },
        },
    });

    const { setItems } = slice.actions;

    const fetchItems = () => async (dispatch: AppDispatch) => {
        const data = await api.getList();
        dispatch(setItems(data));
    };

    return {
        ...slice,
        fetchItems,
    };
};

export default generateSlice;