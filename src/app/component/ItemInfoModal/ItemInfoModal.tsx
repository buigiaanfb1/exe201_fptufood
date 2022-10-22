import { List, Modal, Image, Button, Select, Checkbox, Drawer } from "antd"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "antd/dist/antd.css";
import { setModalVisible } from '../../slice/modal';
import { ModalList, ORDER } from '../../util/constant';
import { addToCart, clearCart, decreaseQty, increseQty, RemoveItemFromCart } from "../../slice/cart";
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
import { handleNotification } from "../../util/helper";

const ItemInfoModal: React.FC = () => {
    const { ItemInfoModalVisible } = useAppSelector((state) => state.modal);
    const { User } = useAppSelector((state) => state.user);
    const { item } = useAppSelector((state) => state.items);
    const dispatch = useAppDispatch()
    return (
        <>
            <Drawer
                width={700}
                title="Món ăn"
                placement="right"
                open={ItemInfoModalVisible}
                onClose={() => {
                    dispatch(setModalVisible({ modal: ModalList.ITEM_INFO_MODAL, visible: false }))
                }}
            >
                <img src={item?.data?.image} />
                <div>
                    <h2>Tên món : {item?.data?.name}</h2>
                    <h2>Giá thành :{item?.data?.price}.000 VNĐ</h2>
                    <h2>Mô tả : {item?.data?.description}</h2>
                    <h2>Tên quán :  {item?.data?.from}</h2>
                </div>
            </Drawer>
        </>
    );
}

export default ItemInfoModal 