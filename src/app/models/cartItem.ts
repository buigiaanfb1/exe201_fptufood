import { FoodItemModel } from "./FoodItem";

export interface CartModel {
    data: FoodItemModel,
    quantity: number
} 