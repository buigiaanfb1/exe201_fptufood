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
const Navbar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cart,totalItemInCart } = useAppSelector((state) => state.cart);
  return (
    <>
      <div className="on-sale-wrapper">
        <p>giảm giá ship 30% cho đơn hàng đầu tiên</p>
      </div>
      <div className="top-bar">
        <div className="links">
          <h1>F.FOOD</h1>
          <ul>
            <li>Shop</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Policy</li>
          </ul>
        </div>

        <div className="icon-items">
          <ShoppingCartOutlined
            style={{ fontSize: '1.5rem', color: '#ee4d2d' }}
            className="cart-icon"
            onClick={() => {
              dispatch(
                setModalVisible({ modal: ModalList.CART_MODAL, visible: true })
              );
            }}
          />
          {totalItemInCart}
          <UserOutlined
            style={{ fontSize: '1.5rem', color: '#ee4d2d' }}
            className="cart-icon"
            onClick={() => {
              dispatch(
                setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: true })
              );
            }}
          />
          <SearchOutlined
            style={{ fontSize: '1.5rem', color: '#ee4d2d' }}
            className="cart-icon"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
