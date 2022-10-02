import { FoodItem } from "../models/FoodItem"


const FoodItem: React.FC<FoodItem> = (item: FoodItem) => {
    const { name, price, image } = item

    return (
        <>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <image>{image}</image>
        </>

    )
}

export default FoodItem