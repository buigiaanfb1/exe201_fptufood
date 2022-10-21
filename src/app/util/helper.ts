import { message, notification } from "antd";

export const handleNotification = (type: boolean, des: string) => {

  message.success(des);

};