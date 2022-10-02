import React, { useEffect, useState } from 'react';
import LoginBox from '../component/login';
import { FoodItem } from '../models/FoodItem';
import { foodItemsService } from '../services/foodItems';






const LoginPage: React.FC = () => {

  const [foodList, setFoodList] = useState<FoodItem[]>([])


  const getUsers = async () => {
    const list = await foodItemsService.getItems();
    setFoodList(list);
  };

  useEffect(() => {
    window.document.title = 'FPT-Food';
    getUsers()
  }, []);

  return (
    <div className="ui tight grid content login-page">
      <div className="login-box">
        <LoginBox />
        {foodList.map((food) => {
          return (
            <h1>{food.data?.name}</h1>
          )
        })}
      </div>
    </div>
  );
};

export default LoginPage;
