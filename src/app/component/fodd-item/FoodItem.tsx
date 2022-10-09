/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
import { Button } from 'antd';
import { useAppDispatch } from '../../hooks';
import { FoodItemModel } from '../../models/FoodItem';
import { addToCart, RemoveItemFromCart } from '../../slice/cart';
import './style.css';
import "antd/dist/antd.css";

interface Props {
  item: FoodItemModel;
}
const FoodItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="food-item">
      <div className="image-container">
        <img src={item?.data?.image} alt="food" />
      </div>
      <div>
        <h3>{item?.data?.name}</h3>
        <h1>{item?.data?.price}</h1>
      </div>

      <div>
        <Button
        type="primary" style={{ background: "#ee4d2d", borderColor: "#ee4d2d" }}
          onClick={() => {
            dispatch(addToCart({ item }));
          }}
        >
          Add To Cart
        </Button>
        <Button
        className='item-btn'
         type="primary" style={{ background: "#ee4d2d", borderColor: "#ee4d2d" }}
          onClick={() => {
            dispatch(RemoveItemFromCart({ item }));
          }}
        >
          Reomve From Cart
        </Button>
      </div>
    </div>
  );
};

export default FoodItem;
