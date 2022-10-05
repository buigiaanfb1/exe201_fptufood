/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-redeclare */
import { useAppDispatch } from '../../hooks';
import { FoodItemModel } from '../../models/FoodItem';
import { addToCart, decreaseQuantity } from '../../slice/cart';
import './style.css';

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
        <button
          onClick={() => {
            dispatch(addToCart({ item }));
          }}
        >
          {' '}
          Add To Cart{' '}
        </button>

        <button
          onClick={() => {
            dispatch(decreaseQuantity({ item }));
          }}
        >
          {' '}
          Reomve From Cart{' '}
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
