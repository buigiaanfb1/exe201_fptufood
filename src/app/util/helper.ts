import { message, notification } from "antd";

export const handleNotification = (type: boolean, des: string) => {

  switch (type) {
    case true: message.success(des); break;
    case false: message.error(des); break;
  }

};