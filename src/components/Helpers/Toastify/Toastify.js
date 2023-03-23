import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = message =>
  toast(<p style={{ fontSize: 16, color: 'green' }}>{message}</p>, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: 'success',
  });

const notifyError = message =>
  toast(<p style={{ fontSize: 16, color: 'red' }}>{message}</p>, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    type: 'error',
  });

export { notifySuccess, notifyError };
