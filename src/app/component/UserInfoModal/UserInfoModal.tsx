import { List, Modal, Image, Button, Select, Checkbox, Drawer, Form, Input } from "antd"
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
import { setUser } from "../../slice/user";
import './style.css'
import { getCookie, setCookie } from "../../util/cookie";

const UserInfoModal: React.FC = () => {
    const { UserInfoModalVisible } = useAppSelector((state) => state.modal);
    const { User } = useAppSelector((state) => state.user);
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()


    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(setUser({ value: values }))
        dispatch(setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: false }))
        setCookie({name:'userName',value:values.name})
        setCookie({name:'phoneNumber',value:values.phoneNumber})
       
    };
    return (
        <>
            <Modal
                title="Hồ sơ của bạn" open={UserInfoModalVisible}
                onCancel={() => {
                    dispatch(setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: false }))
                }}
                footer={null}
            >
                <div className="UserInfoContainer" >
                    <Form
                        name="basic"
                        // labelCol={{ span: 8 }}
                        // wrapperCol={{ span: 16 }}
                        initialValues={{
                            phoneNumber: getCookie('phoneNumber'),
                            name: getCookie('userName'),
                        }}
                        onFinish={onFinish}
                        // onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <div className="UserInfoContent">
                            <div>
                                <h1>Chào mừng bạn đến với FFood </h1>
                               
                            </div>

                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Vui lòng nhập tên !' }]}
                            >
                                <Input size="large" placeholder=" Tên của bạn" />
                            </Form.Item>
                            <Form.Item
                                name="phoneNumber"
                                rules={[{
                                    required: true, message: 'Vui lòng nhập đúng số điện thoại!',
                                    pattern: new RegExp('[0-9]{10}'),
                                }]}
                            >
                                <Input size="large" placeholder=" Số điện thoại của bạn" />
                            </Form.Item>
                        </div>



                        <Form.Item >
                            <Button type="primary" htmlType="submit" style={{ background: "#ee4d2d", borderColor: "#ee4d2d", width: '400px' }}>
                                Tiếp tục
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </Modal>
        </>
    );
}

export default UserInfoModal 