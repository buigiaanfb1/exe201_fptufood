import React, { useEffect, useState, useRef } from 'react';
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
  const aboutUsRef = useRef<any>(null);
  const contactUsRef = useRef<any>(null);
  const homeRef = useRef<any>(null);
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

  const executeScroll = (ref: any) =>
    ref.current.scrollIntoView({
      behavior: 'smooth',
    });

  return (
    <>
      <Navbar
        contactUsRef={contactUsRef}
        aboutUsRef={aboutUsRef}
        homeRef={homeRef}
        onScroll={executeScroll}
      />
      <div className="background-wrapper">
        <div className="slogan">
          <h1>?????T M??N NGON</h1>
          <h1>C??NG F.FOOD</h1>
          <button>?????t h??ng ngay</button>
        </div>
      </div>
      <div ref={homeRef} className="introduce-services">
        <div className="container-services">
          <div
            className="food_type"
            onClick={async () => {
              const list = await foodItemsService.getItems();
              setFoodList(list.filter((f) => f.data?.type === 'food'));
            }}
          >
            <img src={anvat} />
            <p>M??n ??n</p>
          </div>
          <div
            className="food_type"
            onClick={async () => {
              const list = await foodItemsService.getItems();
              setFoodList(list.filter((f) => f.data?.type === 'drink'));
            }}
          >
            <img src={douong} />
            <p>????? u???ng</p>
          </div>
        </div>
      </div>
      <div className="food-for-you-wrapper">
        <div className="box"></div>
        <h1>M??n ngon d??nh cho b???n</h1>
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
          <h1>??N V???T</h1>
          <h1>X??? CHI???U</h1>
        </div>
        <img src={gooddeal} />
      </div>
      <div ref={aboutUsRef} className="about-us-wrapper">
        <div className="box"></div>
        <img src={ffood} className="ffood-circle" />

        <div className="about-us-left">
          <img src={aboutus} />
          <img src={pink} className="item pink" />
          <img src={blue} className="item blue" />
          <img src={green} className="item green" />
        </div>
        <div className="about-us-right">
          <h1>V??? CH??NG T??I</h1>
          <p>
            Ch??ng t??i l?? ????n v??? ?????t ????? ??n d??nh ri??ng cho c???ng ?????ng ?????i h???c FPT
            HCM. V???i ti??u ch?? mang l???i tr???i nghi???m ?????t ????? nhanh ch??ng, ti???n l???i
            v?? ti???t ki???m cho kh??ch h??ng, ch??ng t??i lu??n kh??ng ng???ng c??? g???ng,
            ti???p thu ?? ki???n v?? ph??t tri???n d???ch v???.
          </p>
          <p>C???m ??n m???i ng?????i ???? ?????ng h??nh v?? ???ng h??? F.FOOD!</p>
        </div>
      </div>
      <div ref={contactUsRef} className="footer-wrapper">
        <div className="footer-logo">
          <img src={logo} />
        </div>
        <div className="footer-contact">
          <h3>LI??N H???</h3>
          <p>(+84) 359072274</p>
          <p>ffood.foodforfptuer@gmail.com</p>
          <p>
            L?? E2a-7, ???????ng D1, Long Th???nh M???, Th??nh Ph??? Th??? ?????c, Th??nh ph??? H???
            Ch?? Minh
          </p>
        </div>
        <div className="footer-contact">
          <h3>M???NG X?? H???I</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div className="footer-contact">
          <h3>TR??? GI??P</h3>
          <p>T???o t??i kho???n</p>
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
