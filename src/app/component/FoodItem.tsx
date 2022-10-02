/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
import { FoodItem } from "../models/FoodItem"


const FoodItem: React.FC<FoodItem> = (item) => {
    const { data, id } = item

    return (
        <>
            <h1>{data?.name}</h1>
            <h1>{data?.price}</h1>
            <image>{data?.image}</image>
            <image>{data?.image}</image>
        </>

    )
}

export default FoodItem