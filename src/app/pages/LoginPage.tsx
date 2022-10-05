import React, { useEffect, useState } from 'react';
import LoginBox from '../component/login-box/login';
import { FoodItemModel } from '../models/FoodItem';
// import { foodItemsService } from '../services/foodItems';
import deliveryman from '../asset/deliveryman.png';
import './style.css';

const LoginPage: React.FC = () => {
  const [foodList, setFoodList] = useState<FoodItemModel[]>([]);

  // const getUsers = async () => {
  //   const list = await foodItemsService.getItems();
  //   setFoodList(list);
  // };

  useEffect(() => {
    window.document.title = 'FPT-Food';
    // getUsers()
  }, []);
  return (
    <>
      <div className="logo_wrapper">
        <h1>F.FOOD</h1>
      </div>
      <div className="login-page-container">
        <div className="form_wrapper">
          <div className="form_header">
            <h2>Login</h2>
          </div>
          <div className="form_body">
            <LoginBox />
          </div>
          <div className="form_footer"></div>
        </div>
        <div className="img-fpt-food">
          <img
            className="food-delivery"
            src={deliveryman}
            alt="person working in warehouse"
          />
        </div>

        {/* <div className="login-box">
        <LoginBox />
      </div> */}

        {/* <div className="custom-shape-divider-bottom-1664716324">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div> */}
      </div>
    </>
  );
};

export default LoginPage;
