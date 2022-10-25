import React from 'react';
import './style.css';

import {
  ShoppingCartOutlined,
  UserOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setModalVisible } from '../../slice/modal';
import { ModalList } from '../../util/constant';
import logo from '../../asset/logo.png';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  contactUsRef?: any;
  aboutUsRef?: any;
  homeRef?: any;
  onScroll?: any;
}

const Navbar: React.FC<NavbarProps> = ({
  contactUsRef,
  aboutUsRef,
  homeRef,
  onScroll,
}: NavbarProps): any => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cart, totalItemInCart } = useAppSelector((state) => state.cart);
  return (
    <>
      <div className="on-sale-wrapper">
        <p>ĐẶT ĐỒ ĂN CÙNG F.FOOD</p>
      </div>
      <div className="top-bar">
        <div className="links">
          <ul>
            <li
              onClick={() => {
                onScroll(homeRef);
              }}
            >
              Đặt hàng
            </li>
            <li
              onClick={() => {
                // navigate('/aboutUs');
                onScroll(aboutUsRef);
              }}
            >
              Về chúng tôi
            </li>
            <li
              onClick={() => {
                // navigate('/contactUs');
                onScroll(contactUsRef);
              }}
            >
              Liên hệ
            </li>
          </ul>
        </div>
        <div className="logo">
          <img
            src={logo}
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
        <div className="icon-items">
          <UserOutlined
            style={{ fontSize: '1.25rem', color: '#000' }}
            className="cart-icon"
            onClick={() => {
              dispatch(
                setModalVisible({
                  modal: ModalList.USER_INFO_MODAL,
                  visible: true,
                })
              );
            }}
          />
          <ShoppingCartOutlined
            style={{ fontSize: '1.25rem', color: '#000' }}
            className="cart-icon"
            onClick={() => {
              dispatch(
                setModalVisible({ modal: ModalList.CART_MODAL, visible: true })
              );
            }}
          />
          <span style={{ transform: 'translate(-0.25rem,0)' }}>
            {totalItemInCart}
          </span>
          <SearchOutlined
            style={{ fontSize: '1.25rem', color: '#000' }}
            className="cart-icon"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
