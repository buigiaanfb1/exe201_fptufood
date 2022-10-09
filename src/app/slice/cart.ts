import {
    createSlice,
    PayloadAction,
    CaseReducer,
    createAsyncThunk,
} from '@reduxjs/toolkit';
import Item from 'antd/lib/list/Item';
import { CartModel } from '../models/cartItem';
import { FoodItemModel } from '../models/FoodItem';

type CR<T> = CaseReducer<State, PayloadAction<T>>;
interface State {
    cart: CartModel[],
    totalItemInCart: number,
}

const initialState: State = {
    cart: [],
    totalItemInCart: 0
};

const addToCartCR: CR<{ item: FoodItemModel }> = (
    state,
    action,
) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const t: CartModel | undefined = state.cart.find((f) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return f.data.id === action.payload.item.id
    })
    
    if (t !== undefined) {
        state.cart.map((c) => {
            if (c.data.id === action.payload.item.id) {
                c.quantity = c.quantity + 1
                state.totalItemInCart = state.totalItemInCart + 1
            }
        })
        console.log(t?.quantity);
    } if (t === undefined) {
        let cart: CartModel = {
            data: action.payload.item,
            quantity: 1,
        }
        state.totalItemInCart = state.totalItemInCart + 1
        state.cart.push(cart)
    }
}
const increseQtyCR: CR<{ item: CartModel }> = (
    state,
    action,
) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const t: CartModel | undefined = state.cart.find((f) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return f.data.id === action.payload.item.data.id
    })
    
    if (t !== undefined) {
        state.cart.map((c) => {
            if (c.data.id === action.payload.item.data.id) {
                c.quantity = c.quantity + 1
                state.totalItemInCart = state.totalItemInCart + 1
            }
        })
        console.log(t?.quantity);
    } if (t === undefined) {
        let cart: CartModel = {
            data: action.payload.item.data,
            quantity: 1,
        }
        state.totalItemInCart = state.totalItemInCart + 1
        state.cart.push(cart)
    }
}


const RemoveItemFromCartCR: CR<{ item: FoodItemModel }> = (
    state,
    action,
) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const t: CartModel | undefined = state.cart.find((f) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return f.data.id === action.payload.item.id
    })
    if (t) {
        if (t.quantity > 1) {
            state.cart.map((c) => {
                if (c.data.id === action.payload.item.id) {
                    c.quantity = c.quantity - 1
                    state.totalItemInCart = state.totalItemInCart - 1
                    // eslint-disable-next-line array-callback-return
                    
                }
            })
            return
        } if (t.quantity === 1) {
            console.log("remove" , t.quantity);           
            state.cart=state.cart.filter((c) => {
                return c.data.id !== action.payload.item.id
            })
            state.totalItemInCart = state.totalItemInCart - 1
            return
        }
    }
}

const decreaseQtyCR: CR<{ item: CartModel }> = (
    state,
    action,
) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const t: CartModel | undefined = state.cart.find((f) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        return f.data.id === action.payload.item.data.id
    })
    if (t) {
        if (t.quantity > 1) {
            state.cart.map((c) => {
                if (c.data.id === action.payload.item.data.id) {
                    c.quantity = c.quantity - 1
                    state.totalItemInCart = state.totalItemInCart - 1
                    // eslint-disable-next-line array-callback-return
                    
                }
            })
            return
        } if (t.quantity === 1) {
            console.log("remove" , t.quantity);           
            state.cart=state.cart.filter((c) => {
                return c.data.id !== action.payload.item.data.id
            })
            state.totalItemInCart = state.totalItemInCart - 1
            return
        }
    }
}



const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: addToCartCR,
        RemoveItemFromCart:RemoveItemFromCartCR,
        decreaseQty:decreaseQtyCR,
        increseQty:increseQtyCR,
    },
})

export const { addToCart,RemoveItemFromCart,decreaseQty ,increseQty} = cart.actions;


export default cart.reducer;