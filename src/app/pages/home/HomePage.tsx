import React, { useEffect, useState } from 'react';
import FoodItem from '../../component/fodd-item/FoodItem';
import Navbar from '../../component/navbar/login';
import { FoodItemModel } from '../../models/FoodItem';
import { foodItemsService } from '../../services/foodItems';
import './style.css';
import anvat from '../../asset/anvat.png';
import douong from '../../asset/douong.png';
import gooddeal from '../../asset/gooddeal.png';
import aboutus from '../../asset/aboutus.png';
import green from '../../asset/green.png';
import blue from '../../asset/blue.png';
import pink from '../../asset/pink.png';
import ffood from '../../asset/ffood.png';
import logo from '../../asset/logo.png';
import { useAppDispatch, useAppSelector } from '../../hooks';
import 'antd/dist/antd.css';
import CartModal from '../../component/CartModal/CartModal';
import { getItems } from '../../slice/item';
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
    setFoodList(list.filter((f) => f.data?.type === 'food'));
  };
  useEffect(() => {
    window.document.title = 'FPT-Food';
    getUsers();
    if (getCookie('userName') !== '') {
      dispatch(
        setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: false })
      );
    }
    const user: User = {
      name: getCookie('userName'),
      phoneNumber: getCookie('phoneNumber'),
    };
    dispatch(setUser({ value: user }));
  }, []);

  return (
    <>
      <Navbar />
      <div className="background-wrapper">
        <div className="slogan">
          <h1>ĐẶT MÓN NGON</h1>
          <h1>CÙNG F.FOOD</h1>
          <button>đặt hàng ngay</button>
        </div>
      </div>
      <div className="introduce-services">
        <div className="container-services">
          <div
            className="food_type"
            onClick={async () => {
              const list = await foodItemsService.getItems();
              setFoodList(list.filter((f) => f.data?.type === 'food'));
            }}
          >
            <img src={anvat} />
            <p>Món Ăn</p>
          </div>
          <div
            className="food_type"
            onClick={async () => {
              const list = await foodItemsService.getItems();
              setFoodList(list.filter((f) => f.data?.type === 'drink'));
            }}
          >
            <img src={douong} />
            <p>Đồ uống</p>
          </div>
        </div>
      </div>
      <div className="food-for-you-wrapper">
        <div className="box"></div>
        <h1>Món ngon dành cho bạn</h1>
        <div className="food-items-wrapper">
          {foodList.map((food) => {
            return <FoodItem item={food} />;
          })}
        </div>
      </div>
      <div className="good-deal">
        <p>Good deal</p>
      </div>
      <div className="background-wrapper-sub">
        <div className="slogan-sub">
          <h1>ĂN VẶT</h1>
          <h1>XẾ CHIỀU</h1>
        </div>
        <img src={gooddeal} />
      </div>
      <div className="about-us-wrapper">
        <div className="box"></div>
        <img src={ffood} className="ffood-circle" />

        <div className="about-us-left">
          <img src={aboutus} />
          <img src={pink} className="item pink" />
          <img src={blue} className="item blue" />
          <img src={green} className="item green" />
        </div>
        <div className="about-us-right">
          <h1>VỀ CHÚNG TÔI</h1>
          <p>
            Chúng tôi là đơn vị đặt đồ ăn dành riêng cho cộng đồng Đại học FPT
            HCM. Với tiêu chí mang lại trải nghiệm đặt đồ nhanh chóng, tiện lợi
            và tiết kiệm cho khách hàng, chúng tôi luôn không ngừng cố gắng,
            tiếp thu ý kiến và phát triển dịch vụ.
          </p>
          <p>Cảm ơn mọi người đã đồng hành và ủng hộ F.FOOD!</p>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="footer-logo">
          <img src={logo} />
        </div>
        <div className="footer-contact">
          <h3>LIÊN HỆ</h3>
          <p>(+84) 359072274</p>
          <p>ffood.foodforfptuer@gmail.com</p>
          <p>
            Lô E2a-7, Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố Hồ
            Chí Minh
          </p>
        </div>
        <div className="footer-contact">
          <h3>MẠNG XÃ HỘI</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="footer-contact">
          <h3>TRỢ GIÚP</h3>
          <p>Tạo tài khoản</p>
          <p>FAQ</p>
          <p>Policy</p>
        </div>
      </div>
      <CartModal />
      <UserInfoModal />
      <ItemInfoModal />
    </>
  );
};

export default HomePage;
