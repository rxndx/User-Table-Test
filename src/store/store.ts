import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import generateSlice from './reducer';
import { usersHolderUrl } from '../api/url';

export const usersSlice = generateSlice('users', usersHolderUrl);

export const store = configureStore({
    reducer: {
        users: usersSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default store;