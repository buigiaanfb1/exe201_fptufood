import {
    createSlice,
    PayloadAction,
    CaseReducer,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import Item from 'antd/lib/list/Item';
import { CartModel } from '../models/cartItem';
import { FoodItemModel } from '../models/FoodItem';
import { foodItemsService } from '../services/foodItems';

type CR<T> = CaseReducer<State, PayloadAction<T>>;
interface State {
  listItems:FoodItemModel[]|[]
  getItemLoading:boolean
}

const initialState: State = {
    listItems:[],
    getItemLoading:false
};
const TYPE_PREFIX = 'items/';

const getItems = createAsyncThunk(
    `${TYPE_PREFIX}getItems`,
    async () => {
      const result = await foodItemsService.getItems();
      return result;
    },
  );

const items = createSlice({
    name: 'items',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // get file detail by id
        builder.addCase(getItems.pending, (state) => ({
          ...state,
          getItemLoading: true,
        }));
        builder.addCase(getItems.fulfilled, (state, { payload }) => ({
          ...state,
          listItems: payload,
          getItemLoading: false,
        }));
        builder.addCase(getItems.rejected, (state) => ({
          ...state,
          getItemLoading: false,
        }));
    
       
      },
})

export const { } = items.actions;

export{
    getItems,
}

export default items.reducer;