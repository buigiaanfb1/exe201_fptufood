import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../features/counter/counterSlice';
import cart from '../slice/cart';
import modal from '../slice/modal';
import items from '../slice/item';
import user from '../slice/user';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cart,
    modal:modal,
    items:items,
    user:user
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
