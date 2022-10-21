import { List, Modal, Image, Button, Select, Checkbox, Drawer } from "antd"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "antd/dist/antd.css";
import { setModalVisible } from '../../slice/modal';
import { ModalList, ORDER } from '../../util/constant';
import { addToCart, decreaseQty, increseQty, RemoveItemFromCart } from "../../slice/cart";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import moment from 'moment';

const CartModal: React.FC = () => {
    const { CartModalVisible } = useAppSelector((state) => state.modal);
    const { User } = useAppSelector((state) => state.user);
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()
    const usersCollectionRef = collection(db, ORDER);
    const [orderTime, setOrderTime] = useState<string>('')


    const placeOrder = async () => {

        if (orderTime === '') {
            alert('please choose time')
        } else if (!User || User === null) {
            dispatch(setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: true }))
        }
        else {
            const date = new Date()
            await addDoc(usersCollectionRef, { cart: cart, phoneNumber: User.phoneNumber, name:  User.name, deliveryTime: orderTime, orderDate: date });
        }

    }
    const { Option } = Select;

    const checkValidTime = (hour: number) => {
        const currentHour = moment().hour()
        if (currentHour < hour) {
            console.log(true, currentHour);
            return false
        } else {
            console.log(false, currentHour);
            return true
        }
    }

    const handleOrderTime = (value: string) => {
        setOrderTime(value)
    }
    return (
        <>
            <Modal
                width={1000}
                title="Cart" open={CartModalVisible}
                onCancel={() => {
                    dispatch(setModalVisible({ modal: ModalList.CART_MODAL, visible: false }))
                }}
                footer={null}
            >
                {
                    cart.length > 0 ? (
                        <>
                            <List
                                itemLayout="horizontal"
                                dataSource={cart}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Image
                                                width={200}
                                                src={item.data.data?.image}
                                            />}
                                            title={<span>{item.data.data?.name}</span>}
                                            description={<div >
                                                Total price : {item!.data!.data!.price! * item.quantity}$<br />
                                                {item.quantity}-{item.data.data?.name}
                                            </div>}
                                        />
                                        <div>
                                            <Button
                                                type="primary" style={{ background: "#ee4d2d", borderColor: "#ee4d2d" }}
                                                onClick={() => {
                                                    dispatch(increseQty({ item }));
                                                }}
                                            >
                                                +
                                            </Button>
                                            <Button
                                                className='item-btn'
                                                type="primary" style={{ background: "#ee4d2d", borderColor: "#ee4d2d" }}
                                                onClick={() => {
                                                    dispatch(decreaseQty({ item }));
                                                }}
                                            >
                                                -
                                            </Button>
                                        </div>

                                    </List.Item>
                                )}
                            />
                            <div>
                                <Select placeholder={'Please select time'} style={{ width: 240 }} onChange={handleOrderTime}>
                                    <Option value="9h" disabled={checkValidTime(8)}  >9h-9h15</Option>
                                    <Option value="11h30" disabled={checkValidTime(10)}>11h30-12h</Option>
                                    <Option value="14h30" disabled={checkValidTime(16)}>14h30-14h45</Option>
                                </Select>
                            </div>
                            <div>
                                <Checkbox onChange={() => { }}>Pay with momo</Checkbox>
                                <Checkbox onChange={() => { }}>Pay in cash</Checkbox>
                            </div>

                            <div>
                                <Button style={{ width: 900 }} onClick={() => { placeOrder() }}> Place Order  </Button>
                            </div>
                        </>) : (<p style={{ color: 'red' }}>Your Cart Is Empty </p>)
                }


            </Modal>

            {/* <Drawer
                title="Cart"
                placement="right"
                open={CartModalVisible}
                onClose={() => {
                    dispatch(setModalVisible({ modal: ModalList.CART_MODAL, visible: false }))
                }}
            >


                {
                    cart.length > 0 ? (
                        <>
                            <List
                                itemLayout="horizontal"
                                dataSource={cart}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<Image
                                                width={200}
                                                src={item.data.data?.image}
                                            />}
                                            title={<span>{item.data.data?.name}</span>}
                                            description={<div >
                                                Total price : {item!.data!.data!.price! * item.quantity}$<br />
                                                {item.quantity}-{item.data.data?.name}
                                            </div>}
                                        />
                                        <div>
                                            <Button
                                                type="primary" style={{ background: "#ee4d2d", borderColor: "#ee4d2d" }}
                                                onClick={() => {
                                                    dispatch(increseQty({ item }));
                                                }}
                                            >
                                                +
                                            </Button>
                                            <Button
                                                className='item-btn'
                                                type="primary" style={{ background: "#ee4d2d", borderColor: "#ee4d2d" }}
                                                onClick={() => {
                                                    dispatch(decreaseQty({ item }));
                                                }}
                                            >
                                                -
                                            </Button>
                                        </div>

                                    </List.Item>
                                )}
                            />
                            <div>
                                <Select placeholder={'Please select time'} style={{ width: 240 }} onChange={handleOrderTime}>
                                    <Option value="9h" disabled={checkValidTime(8)}  >9h-9h15</Option>
                                    <Option value="11h30" disabled={checkValidTime(10)}>11h30-12h</Option>
                                    <Option value="14h30" disabled={checkValidTime(16)}>14h30-14h45</Option>
                                </Select>
                            </div>
                            <div>
                                <Checkbox onChange={() => { }}>Pay with momo</Checkbox>
                                <Checkbox onChange={() => { }}>Pay in cash</Checkbox>
                            </div>

                            <div>
                                <Button style={{ width: 900 }} onClick={() => { placeOrder() }}> Place Order  </Button>
                            </div>
                        </>) : (<p style={{ color: 'red' }}>Your Cart Is Empty </p>)
                }
            </Drawer> */}
        </>
    );
}

export default CartModal 