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
import { getItems, setlistItem } from '../../slice/item';
import UserInfoModal from '../../component/UserInfoModal/UserInfoModal';
import ItemInfoModal from '../../component/ItemInfoModal/ItemInfoModal';
import { getCookie } from '../../util/cookie';
import { setModalVisible } from '../../slice/modal';
import { ModalList } from '../../util/constant';
import { setUser } from '../../slice/user';
import { User } from '../../models/user';

const HomePage: React.FC = () => {
  const [foodList, setFoodList] = useState<FoodItemModel[]>([]);
  const dispatch = useAppDispatch();
  const { listItems } = useAppSelector((state) => state.items);
  const getUsers = async () => {
    const list = await foodItemsService.getItems();
    console.log(list);
    dispatch(getItems());
    setFoodList(list.filter(f => f.data?.type === 'food'));
  };
  useEffect(() => {
    window.document.title = 'FPT-Food';
    getUsers();
    if (getCookie('userName') !== '') {
      dispatch(setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: false }))
    }
    const user: User = {
      name: getCookie('userName'),
      phoneNumber: getCookie('phoneNumber')
    }
    dispatch(setUser({ value: user }))

  }, []);

  return (
    <>
      <Navbar />
      <div className="background-wrapper">
        <div className="slogan">
          <h1>ĐẶT MÓN NGON
          </h1>
          <h1>CÙNG F.FOOD</h1>
          <button>Order now</button>
        </div>
      </div>
      <div className="introduce-services">
        <div className="container-services">
        <div className='food_type' onClick={async () => {
            const list = await foodItemsService.getItems();
            setFoodList(list.filter(f => f.data?.type === 'food'));
            
          }}>
            <img src={anvat} />
            <p>Món Ăn</p>
          </div>
          <div className='food_type' onClick={async () => {
            const list = await foodItemsService.getItems();
            setFoodList(list.filter(f => f.data?.type === 'drink'));
          }}>
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
      <UserInfoModal />
      <ItemInfoModal />
    </>
  );
};

export default HomePage;
