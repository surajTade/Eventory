import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
};

export const NotificationContainer = () => {
  return <ToastContainer />;
};

export default Notification;
