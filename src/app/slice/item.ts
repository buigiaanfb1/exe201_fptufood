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
  item:FoodItemModel|null
}

const initialState: State = {
    listItems:[],
    getItemLoading:false,
    item:null
};
const TYPE_PREFIX = 'items/';

const getItems = createAsyncThunk(
    `${TYPE_PREFIX}getItems`,
    async () => {
      const result = await foodItemsService.getItems();
      return result;
    },
  );



  const setItemDetailCR: CR<{ value: FoodItemModel }> = (
    state,
    action,
) => ({
    ...state,
    item: action.payload.value
})

const setlistItemCR: CR<{ value: string,list:FoodItemModel[] }> = (
  state,
  action,
) => {
  switch (action.payload.value) {
    case 'drink':
      return {
        ...state,
        listItems:action.payload.list ,
      };
      // case'drink':
      // return {
      //   ...state,
      //   UserInfoModalVisible: action.payload.visible,
      // };
      
    default:
      return { ...state };
  }
}

const items = createSlice({
    name: 'items',
    initialState,
    reducers: {
      setItemDetail:setItemDetailCR,
      setlistItem:setlistItemCR
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

export const {setItemDetail,setlistItem } = items.actions;

export{
    getItems,
}

export default items.reducer;