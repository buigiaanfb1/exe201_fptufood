import React, { useEffect, useState } from 'react';
import FoodItem from '../../component/fodd-item/FoodItem';
import Navbar from '../../component/navbar/login';
import { FoodItemModel } from '../../models/FoodItem';
import { foodItemsService } from '../../services/foodItems';
import './style.css';
import anvat from '../../asset/anvat.png';
import trangmieng from '../../asset/trangmieng.png';
import douong from '../../asset/douong.png';
import { useAppDispatch, useAppSelector } from '../../hooks';
import 'antd/dist/antd.css';
import CartModal from '../../component/CartModal/CartModal';
import { getItems } from '../../slice/item';

const HomePage: React.FC = () => {
  const [foodList, setFoodList] = useState<FoodItemModel[]>([]);
  const dispatch = useAppDispatch();

  const getUsers = async () => {
    const list = await foodItemsService.getItems();
    dispatch(getItems());
    setFoodList(list);
  };
  useEffect(() => {
    window.document.title = 'FPT-Food';
    getUsers();
  }, []);
  const { totalItemInCart } = useAppSelector((state) => state.cart);
  return (
    <>
      <Navbar />
      <div className="background-wrapper">
        <div className="slogan">
          <h1>Less talk,</h1>
          <h1>More eat.</h1>
          <button>Order now</button>
        </div>
      </div>
      <div className="introduce-services">
        <div className="container-services">
          <div>
            <img src={anvat} />
            <p>Ăn vặt</p>
          </div>
          <div>
            <img src={trangmieng} />
            <p>Tráng miệng</p>
          </div>
          <div>
            <img src={douong} />
            <p>Đồ uống</p>
          </div>
        </div>
      </div>
      <div className="food-for-you-wrapper">
        <h1>Món ngon dành cho bạn</h1>
        <div className="food-items-wrapper">
          {foodList.map((food) => {
            return <FoodItem item={food} />;
          })}
        </div>
      </div>
      <CartModal />
    </>
  );
};

export default HomePage;
