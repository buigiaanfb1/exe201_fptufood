import React, { useEffect, useState } from 'react';
import FoodItem from '../../component/fodd-item/FoodItem';
import { FoodItemModel } from '../../models/FoodItem';
import { foodItemsService } from '../../services/foodItems';
import './style.css'





const HomePage: React.FC = () => {
    const [foodList, setFoodList] = useState<FoodItemModel[]>([])
    const getUsers = async () => {
        const list = await foodItemsService.getItems();
        setFoodList(list);
    };
    useEffect(() => {
        window.document.title = 'FPT-Food';
        getUsers()
    }, []);
    return (
        <div className='food-list'>
            {foodList.map((food) => {
                return (

                    <FoodItem
                        item={food}
                    />


                )
            })}


        </div>
    );
};

export default HomePage;
