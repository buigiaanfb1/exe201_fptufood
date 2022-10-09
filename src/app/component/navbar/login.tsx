import React from 'react';
import './style.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../hooks';
import { setModalVisible } from '../../slice/modal';
import { ModalList } from '../../util/constant';

const Navbar: React.FC = () => {

const dispatch =useAppDispatch ()

  return (
    <>
      <div className='top-bar'>
        <h1>F.FOOD</h1>

        <ShoppingCartOutlined
          style={{ fontSize: '2rem', color: '#ee4d2d' }}
          className='cart-icon'
          onClick={() => {
            dispatch(setModalVisible( {modal:ModalList.CART_MODAL,visible:true}))
          }}
        />
      </div>
    </>

  );
};

export default Navbar;
