/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Button } from 'antd';
import { useAppDispatch } from '../../hooks';
import { FoodItemModel } from '../../models/FoodItem';
import { addToCart } from '../../slice/cart';
import { PlusOutlined } from '@ant-design/icons';
import './style.css';
import 'antd/dist/antd.css';

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
          <p>{item?.data?.price}VNĐ</p>

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
