import { List, Modal, Image, Button } from "antd"
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import "antd/dist/antd.css";
import { setModalVisible } from '../../slice/modal';
import { ModalList } from '../../util/constant';
import { addToCart, decreaseQty, increseQty, RemoveItemFromCart } from "../../slice/cart";

const CartModal: React.FC = () => {
    const { CartModalVisible } = useAppSelector((state) => state.modal);
    const { cart } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch()
    return (
        <>
            <Modal title="Cart" open={CartModalVisible}
                onCancel={() => {
                    dispatch(setModalVisible({ modal: ModalList.CART_MODAL, visible: false }))
                }}
                footer={null}
            >
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

            </Modal>
        </>
    );
}

export default CartModal 