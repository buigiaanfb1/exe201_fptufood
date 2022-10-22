/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Button } from 'antd';
import { useAppDispatch } from '../../hooks';
import { FoodItemModel } from '../../models/FoodItem';
import { addToCart } from '../../slice/cart';
import { PlusOutlined } from '@ant-design/icons';
import './style.css';
import 'antd/dist/antd.css';
import { setModalVisible } from '../../slice/modal';
import { ModalList } from '../../util/constant';
import { setItemDetail } from '../../slice/item';

interface Props {
  item: FoodItemModel;
}
const FoodItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="food-item">
        <div className="food-item-img-title">
          <img src={item?.data?.image} alt="food" />
          <p>{item?.data?.name}</p>
        </div>
        <div className="food-item-price">
          <p>{item?.data?.price}.000VNĐ</p>
          <Button
            style={{ background: "white", borderColor: "white" }}
            onClick={() => {
              dispatch(setItemDetail({ value: item }))
              dispatch(setModalVisible({ modal: ModalList.ITEM_INFO_MODAL, visible: true }))
            }}
          >
            Xem Chi Tiết
          </Button>
          <PlusOutlined
            style={{ fontSize: '1.25rem', height: '20px' }}
            onClick={() => {
              dispatch(addToCart({ item }));
            }}
          />
          {/* <Button
            className="item-btn"
            type="primary"
            style={{ background: '#ee4d2d', borderColor: '#ee4d2d' }}
            onClick={() => {
              dispatch(RemoveItemFromCart({ item }));
            }}
          >
            Reomve From Cart
          </Button> */}
        </div>
      </div>
    </>
  );
};

export default FoodItem;
