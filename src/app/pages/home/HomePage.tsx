import React, { useEffect, useState } from 'react';
import FoodItem from '../../component/fodd-item/FoodItem';
import Navbar from '../../component/navbar/login';
import { FoodItemModel } from '../../models/FoodItem';
import { foodItemsService } from '../../services/foodItems';
import './style.css';
import android from './../../asset/android.png';
import ios from './../../asset/ios.png';
import { useAppSelector } from '../../hooks';
import { Button } from 'antd';
import "antd/dist/antd.css";
import CartModal from '../../component/CartModal/CartModal';

const HomePage: React.FC = () => {
  const [foodList, setFoodList] = useState<FoodItemModel[]>([]);
  const getUsers = async () => {
    const list = await foodItemsService.getItems();
    setFoodList(list);
  };
  useEffect(() => {
    window.document.title = 'FPT-Food';
    getUsers();
  }, []);
  const { totalItemInCart } = useAppSelector ((state) => state.cart);
  return (
    <>
      <Navbar />
      <div className="background-wrapper">
        <div className="wrapper">
          <div className="search">
            <h2>Đặt Đồ ăn, giao hàng từ 20'</h2>
            <input placeholder="Tìm địa điểm, món ăn, địa chỉ..." />
            <div className="keyword_wrapper">
              <p>All</p>
              <p>Đồ ăn</p>
              <p>Đồ uống</p>
              <p>Đồ chay</p>
              <p>Bánh kem</p>
              <p>Tráng miệng</p>
              <p>Vỉa hè</p>
              <p>Pizza/Burger</p>
              <p>Món gà</p>
              <p>Món lẩu</p>
              <p>Sushi</p>
              <p>Mì phở</p>
              <p>Cơm hộp</p>
            </div>
          </div>
          <div className="wrapper_foods">
            <div>
              Total Item : {totalItemInCart}
            </div>
            <div className="food-list">
              {foodList.map((food) => {
                return <FoodItem item={food} />;
              })}
              
            </div>
           <CartModal/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
