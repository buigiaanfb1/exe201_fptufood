export interface FoodItemData {
    name?: string
    price?: number
    image?: string
    type?:string
    description?:string
    from?:string
}

export interface FoodItemModel {
    id?: string
    data?: FoodItemData
}

