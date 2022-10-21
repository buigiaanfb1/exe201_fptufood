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

const UserInfoModal: React.FC = () => {
    const { UserInfoModalVisible } = useAppSelector((state) => state.modal);
    const { User } = useAppSelector((state) => state.user);
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()


    const onFinish = (values: any) => {
        console.log('Success:', values);
        dispatch(setUser({ value: values }))
        dispatch(setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: false }))
    };

    return (
        <>
            <Modal
                width={1000}
                title="User Information" open={UserInfoModalVisible}
                onCancel={() => {
                    dispatch(setModalVisible({ modal: ModalList.USER_INFO_MODAL, visible: false }))
                }}
                footer={null}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{
                        phoneNumber: User?.phoneNumber,
                        name: User?.name,
                    }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[{
                            required: true, message: 'Please input your phone number!',
                            pattern: new RegExp('[0-9]{10}'),
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" style={{ background: "#ee4d2d", borderColor: "#ee4d2d" }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default UserInfoModal 